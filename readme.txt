From the AI perspective, the main goal was to create a machine learning model which was able to generate cover letters undistinguished from a human-written one. After reviewing different NLG approaches using a pretrained model was selected as the most efficient approach.

The first training of the small 124-M parameters GPT-2 model with the dataset of collected cover letters generated very impressive results (loss=0.19, avg=0.64, 1500 steps): the newly trained model was able to create the text on a very high qualitative level, but the content was not relevant to the candidate skills and job title. For the model training, adjustments were made to the gpt-2-simple framework from Max Woolf. [1]

To get more control over the model output the training dataset was modified with skills extracted from cover letters and job titles. This approach was created using information from an article by Ivan Lai. [2]

It was a challenge to find a suitable model for extracting skills from resumes, but after some experiments with different NLP frameworks (BERT, TFIDF), SpaCy Named Entity Recognition model (en_core_web_sm) was selected for custom skills labeling. The skills dataset modified was found in a Microsoft repository on Github. [3]

The named entity recognition model (NER model) added new skills into the training dataset skills as well as job titles. The retrained GPT-2 based model was able to create a cover letter by being prompted with a set of skills, job title, or combination of both. The results were relevant to provided prompts.

Optimal results were achieved by using the minimal numbers of skills as a prompt – two or three, with a high probability those skills were recognized and implemented in the generated GPT-2 text. The model was not capable of working with a bigger number of elements for proper prediction, probably due to the small size of the training dataset. Sufficient data was provided to the training set after these results, eventually reducing the number of "off topic" sentences in the resulting cover letters.

Both Models (cover letter generation and skill extraction) were set as API services (FastAPI) and containerized(Docker) to be deployed onto AWS to be usable for purposes such as web development.

[1] https://github.com/minimaxir/gpt-2-simple

[2] https://www.ivanlai.project-ds.net/post/conditional-text-generation-by-fine-tuning-gpt-2

[3] https://github.com/microsoft/SkillsExtractorCognitiveSearch/blob/master/data/skill_patterns.jsonl
