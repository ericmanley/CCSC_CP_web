---
name: 'MedBot for Conversational Interaction with Audio Email Attachments'
speakers:
  - Anil Panday
  - Ashish KC
  - Rojina Raut
  - Mark Chai
categories:
  - Poster
program_hide: true
---

In modern healthcare, doctors often face difficulties accessing and organizing patient records, which are scattered across various unstructured audio notes. Many of these records are shared via Gmail, making it a crucial source of patient data. These audio recordings can contain valuable information and actionable insights. Current solutions primarily focus on leveraging AI for voice recognition, summarization, and interaction within a healthcare setting (Byju, 2024). However, the challenge of retrieving files from the emails remains unaddressed. To solve this problem, our research proposed an AI-powered chatbot - MedBot, integrated with Gmail which allows doctors to interact with audio medical records. Instead of manually searching through audio transcriptions, physicians can ask questions, and the system will quickly extract relevant details from past doctor-patient interactions/telephone calls. MedBot uses Vosk for accurate speech-to-text conversion and GoogleGenerativeAIEmbeddings to create searchable vector representations, and Gemini to process natural language queries, and provide context-aware responses. The experiment indicate MedBot can extract correct information from audio attachments sent through Gmail and generate accurate answers. This not only saves time but also ensures more accurate and efficient patient care.     References :  S. Byju, "Voice-to-Text Summarization and Patient Interaction Systems," 2024 5th International Conference on Data Intelligence and Cognitive Informatics (ICDICI), Tirunelveli, India, 2024, pp. 489-493, doi: 10.1109/ICDICI62993.2024.10810979.