# pip install -U spacy
# python -m spacy download en_core_web_sm
import os
import spacy


from spacy.attrs import LOWER, POS, ENT_TYPE, IS_ALPHA
from spacy.tokens import Doc
# Load English tokenizer, tagger, parser and NER
nlp = spacy.load("en_core_web_sm")

#obtain the array of training data from directory
def readFile(dirname):
    wordset = []
    with os.scandir(dirname) as entries:
        for entry in entries:
            fileObj = open(entry, "r") #opens the file in read mode
            words = fileObj.read().splitlines() #puts the file into an array
            newwords=[i for i in words if i.find("=")== -1]
            wordset.append(newwords);
            fileObj.close()
    return wordset

datum = readFile("training_data")
# print(datum)
if(datum == None):
    print("sorry, no data in directory");

superstring = ''.join(map(str, datum))

# # Process whole documents
# # text = ("When Sebastian Thrun started working on self-driving cars at "
# #         "Google in 2007, few people outside of the company took him "
# #         "seriously. “I can tell you very senior CEOs of major American "
# #         "car companies would shake my hand and turn away because I wasn’t "
# #         "worth talking to,” said Thrun, in an interview with Recode earlier "
# #         "this week.")

doc = nlp(superstring)


np_array = doc.to_array([LOWER, POS, ENT_TYPE, IS_ALPHA])

print(np_array)
doc2 = Doc(doc.vocab, words=[t.text for t in doc])

doc2.from_array([LOWER, POS, ENT_TYPE, IS_ALPHA], np_array)
assert doc[0].pos_ == doc2[0].pos_

doc_bin = doc2.to_disk("./data.spacy")

# print(doc)


# # Analyze syntax
# print("Noun phrases:", [chunk.text for chunk in doc.noun_chunks])
# print("Verbs:", [token.lemma_ for token in doc if token.pos_ == "VERB"])


# # Find named entities, phrases and concepts
# for entity in doc.ents:
#     print(entity.text, entity.label_)