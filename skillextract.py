
import textract
import PyPDF2
import en_core_web_sm
from spacy.pipeline import EntityRuler
from spacy import displacy
import jsonlines


def extract_text_from_pdf(file):
    '''Opens and reads in a PDF file from path'''
    
    fileReader = PyPDF2.PdfFileReader(open(file,'rb'))
    page_count = fileReader.getNumPages()
    text = [fileReader.getPage(i).extractText() for i in range(page_count)]
    
    return str(text).replace("\\n", "")

def extract_text_from_word(filepath):
    '''Opens and reads in a .doc or .docx file from path'''
    
    txt = textract.process(filepath).decode('utf-8')
    
    return txt.replace('\n', ' ').replace('\t', ' ')

# Load pre-trained English language model
# nlp = nl_core_news_sm.load()
nlp = spacy.load("en_core_web_sm")

# File Extension. set as 'pdf' or as 'doc(x)'
extension = 'pdf'

def create_tokenized_texts_list(extension):
    '''Create two lists, one with the names of the candidate and one with the tokenized 
       resume texts extracted from either a .pdf or .doc'''
    resume_texts, resume_names = [], []
    
    # Loop over the contents of the directory containing the resumes, filtering by .pdf or .doc(x)
    for resume in list(filter(lambda x: extension in x, os.listdir(PROJECT_DIR + '/CV'))):
        if extension == 'pdf':
            # Read in every resume with pdf extension in the directory
            resume_texts.append(nlp(extract_text_from_pdf(PROJECT_DIR + '/CV/' + resume)))
        elif 'doc' in extension:
            # Read in every resume with .doc or .docx extension in the directory
            resume_texts.append(nlp(extract_text_from_word(PROJECT_DIR + '/CV/' + resume)))
            
        resume_names.append(resume.split('_')[0].capitalize())
        
    return resume_texts, resume_names

# Create list with entity labels from jsonl file
with jsonlines.open(PROJECT_DIR + "data/skill_patterns.jsonl") as f:
    created_entities = [line['label'].upper() for line in f.iter()]
    
def add_newruler_to_pipeline(skill_pattern_path):
    '''Reads in all created patterns from a JSONL file and adds it to the pipeline after PARSER and before NER'''
    
    new_ruler = EntityRuler(nlp).from_disk(skill_pattern_path)
    nlp.add_pipe(new_ruler, after='parser')
    

def visualize_entity_ruler(entity_list, doc):
    '''Visualize the Skill entities of a doc'''
    
    options = {"ents": entity_list}
    displacy.render(doc, style='ent', options=options)
    
visualize_entity_ruler(created_entities, doc)

def create_skillset_dict(resume_names, resume_texts):
    '''Create a dictionary containing a set of the extracted skills. Name is key, matching skillset is value'''
    skillsets = [create_skill_set(resume_text) for resume_text in resume_texts]

    return dict(zip(resume_names, skillsets))

def match_skills(vacature_set, cv_set, resume_name):
    '''Get intersection of resume skills and job offer skills and return match percentage'''
    
    if len(vacature_set) < 1:
        print('could not extract skills from job offer text')   
    else:
        pct_match = round(len(vacature_set.intersection(cv_set[resume_name])) / len(vacature_set) * 100, 0)
        print(resume_name + " has a {}% skill match on this job offer".format(pct_match))
        print('Required skills: {} '.format(vacature_set))
        print('Matched skills: {} \n'.format(vacature_set.intersection(skillset_dict[resume_name])))
        
        return (resume_name, pct_match)
        
add_newruler_to_pipeline(skill_pattern_path)

resume_texts, resume_names = create_tokenized_texts_list(extension)

skillset_dict = create_skillset_dict(resume_names, resume_texts)

# example of job offer text (string). Can input your own.
vacature_text = vacatures_df[vacatures_df['soort_vacature'] == 'Data Scientist'].skills.iloc[13]

# Create a set of the skills extracted from the job offer text
vacature_skillset = create_skill_set(nlp(vacature_text))

# Create a list with tuple pairs containing the names of the candidates and their match percentage
match_pairs = [match_skills(vacature_skillset, skillset_dict, name) for name in skillset_dict.keys()]


