/*
 *  Copyright IBM Corp. 2025
 *
 *  This source code is licensed under the Apache-2.0 license found in the
 *  LICENSE file in the root directory of this source tree.
 *
 *  @license
 */

import { HistoryItem } from "@carbon/ai-chat";

/**
 * Sample history data for testing scroll behavior
 */
export const sampleHistory: HistoryItem[] = [
  {
    message: {
      id: "request-1",
      input: {
        text: "What is AI?",
      },
    },
    time: new Date().toISOString(),
  },
  {
    message: {
      id: "response-1",
      output: {
        generic: [
          {
            response_type: "text",
            text: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.\n\nAI can be categorized in several ways, but two common classifications are:\n\n1. **Narrow or Weak AI**: Designed and trained for a particular task. Virtual personal assistants like Siri and Alexa are examples of narrow AI.\n\n2. **General or Strong AI**: Possesses the ability to understand, learn, and apply knowledge across different domains, similar to human intelligence. This type of AI does not currently exist but is a goal of many AI researchers.",
          },
        ],
      },
    },
    time: new Date().toISOString(),
  },
  {
    message: {
      id: "request-2",
      input: {
        text: "What are the applications of AI?",
      },
    },
    time: new Date().toISOString(),
  },
  {
    message: {
      id: "response-2",
      output: {
        generic: [
          {
            response_type: "text",
            text: "AI has numerous applications across various industries. Here are some key areas where AI is making significant impacts:\n\n1. **Healthcare**: AI assists in disease diagnosis, drug discovery, personalized treatment plans, and patient monitoring.\n\n2. **Finance**: AI powers fraud detection systems, algorithmic trading, credit scoring, and customer service chatbots.\n\n3. **Transportation**: Self-driving vehicles, traffic management systems, and route optimization use AI technologies.\n\n4. **Manufacturing**: AI enables predictive maintenance, quality control, and supply chain optimization.\n\n5. **Retail**: AI powers recommendation systems, inventory management, and customer behavior analysis.\n\n6. **Education**: AI facilitates personalized learning experiences, automated grading, and educational content creation.\n\n7. **Customer Service**: AI chatbots and virtual assistants provide 24/7 customer support.\n\n8. **Entertainment**: Content recommendation systems, game AI, and content creation tools utilize AI.\n\n9. **Agriculture**: AI helps in crop monitoring, yield prediction, and automated farming equipment.\n\n10. **Cybersecurity**: AI systems detect and respond to security threats and anomalies.",
          },
        ],
      },
    },
    time: new Date().toISOString(),
  },
  {
    message: {
      id: "request-3",
      input: {
        text: "What are the ethical concerns with AI?",
      },
    },
    time: new Date().toISOString(),
  },
  {
    message: {
      id: "response-3",
      output: {
        generic: [
          {
            response_type: "text",
            text: "AI raises several important ethical concerns that researchers, policymakers, and society at large need to address:\n\n1. **Privacy and Surveillance**: AI systems can collect and analyze vast amounts of personal data, raising concerns about privacy violations and surveillance.\n\n2. **Bias and Fairness**: AI systems can perpetuate or amplify existing biases in the data they're trained on, leading to unfair or discriminatory outcomes.\n\n3. **Transparency and Explainability**: Many advanced AI systems, particularly deep learning models, operate as \"black boxes\" where their decision-making processes are not easily understood or explained.\n\n4. **Accountability**: When AI systems make mistakes or cause harm, it can be unclear who is responsible—the developers, the users, or the system itself.\n\n5. **Job Displacement**: Automation powered by AI could lead to significant job losses in certain sectors, requiring economic and social adjustments.\n\n6. **Autonomy and Control**: As AI systems become more autonomous, questions arise about how much control humans should maintain and how to ensure AI systems act in accordance with human values.\n\n7. **Security Risks**: AI can be vulnerable to adversarial attacks or could be used maliciously, such as in creating deepfakes or automated cyberattacks.\n\n8. **Digital Divide**: Unequal access to AI technologies could exacerbate existing social and economic inequalities.\n\n9. **Environmental Impact**: Training large AI models requires significant computational resources, which has environmental implications due to energy consumption.\n\n10. **Long-term Existential Risks**: Some experts worry about the potential long-term risks of developing superintelligent AI that could act in ways harmful to humanity.",
          },
        ],
      },
    },
    time: new Date().toISOString(),
  },
  {
    message: {
      id: "request-4",
      input: {
        text: "How is AI used in healthcare?",
      },
    },
    time: new Date().toISOString(),
  },
  {
    message: {
      id: "response-4",
      output: {
        generic: [
          {
            response_type: "text",
            text: "AI is transforming healthcare in numerous ways, improving patient outcomes, increasing efficiency, and reducing costs. Here are some key applications of AI in healthcare:\n\n1. **Disease Diagnosis and Detection**:\n   - AI algorithms can analyze medical images (X-rays, MRIs, CT scans) to detect abnormalities like tumors or fractures\n   - Machine learning models can predict diseases based on patient data and symptoms\n   - Early detection systems for conditions like diabetic retinopathy or skin cancer\n\n2. **Drug Discovery and Development**:\n   - AI accelerates the identification of potential drug candidates\n   - Predicts how different compounds will interact with biological targets\n   - Reduces the time and cost of bringing new medications to market\n\n3. **Personalized Treatment**:\n   - AI analyzes patient data to recommend personalized treatment plans\n   - Predicts patient response to different treatments\n   - Helps in precision medicine by matching treatments to genetic profiles\n\n4. **Medical Research**:\n   - Analyzes vast amounts of medical literature and research data\n   - Identifies patterns and connections that humans might miss\n   - Accelerates scientific discovery through data mining\n\n5. **Patient Monitoring**:\n   - Remote monitoring systems that use AI to detect changes in patient conditions\n   - Wearable devices that track vital signs and alert healthcare providers to potential issues\n   - Predictive analytics to identify patients at risk of deterioration\n\n6. **Administrative Efficiency**:\n   - Automated scheduling and appointment reminders\n   - Medical record management and data entry\n   - Claims processing and billing optimization\n\n7. **Virtual Health Assistants**:\n   - AI-powered chatbots that provide basic medical information and triage\n   - Virtual nurses that help monitor patient adherence to treatment plans\n   - Mental health support through conversational agents\n\n8. **Surgical Assistance**:\n   - Robot-assisted surgery guided by AI\n   - Surgical planning and simulation\n   - Real-time guidance during procedures\n\n9. **Epidemic Prediction and Management**:\n   - AI models that predict disease outbreaks and spread\n   - Resource allocation during health crises\n   - Contact tracing and infection risk assessment\n\n10. **Genomics and Genetic Analysis**:\n    - Analysis of genetic data to identify disease risks\n    - Gene editing guidance\n    - Personalized genetic counseling",
          },
        ],
      },
    },
    time: new Date().toISOString(),
  },
  {
    message: {
      id: "request-5",
      input: {
        text: "What is machine learning?",
      },
    },
    time: new Date().toISOString(),
  },
  {
    message: {
      id: "response-5",
      output: {
        generic: [
          {
            response_type: "text",
            text: "Machine Learning (ML) is a subset of artificial intelligence that focuses on developing systems that can learn from and make decisions based on data. Instead of being explicitly programmed to perform a task, machine learning algorithms use data to build models that improve their performance over time.\n\n**Core Concepts of Machine Learning:**\n\n1. **Learning from Data**: ML algorithms analyze patterns in data to make predictions or decisions without being explicitly programmed for the specific task.\n\n2. **Training and Testing**: Models are typically developed using a training dataset and then evaluated on separate testing data to assess their performance.\n\n3. **Generalization**: The goal is to create models that perform well not just on training data but also on new, unseen data.\n\n**Main Types of Machine Learning:**\n\n1. **Supervised Learning**:\n   - Algorithms learn from labeled training data\n   - Examples include classification (predicting categories) and regression (predicting continuous values)\n   - Applications: spam detection, image recognition, price prediction\n\n2. **Unsupervised Learning**:\n   - Algorithms find patterns in unlabeled data\n   - Examples include clustering (grouping similar data points) and dimensionality reduction\n   - Applications: customer segmentation, anomaly detection, feature learning\n\n3. **Semi-Supervised Learning**:\n   - Uses both labeled and unlabeled data for training\n   - Particularly useful when labeled data is limited or expensive to obtain\n   - Applications: speech recognition, content classification\n\n4. **Reinforcement Learning**:\n   - Algorithms learn by interacting with an environment and receiving feedback (rewards or penalties)\n   - Applications: game playing, robotics, autonomous vehicles, recommendation systems\n\n**Common Machine Learning Algorithms:**\n\n- Linear and Logistic Regression\n- Decision Trees and Random Forests\n- Support Vector Machines\n- Neural Networks and Deep Learning\n- K-means Clustering\n- Principal Component Analysis\n- Naive Bayes\n- Gradient Boosting Methods (like XGBoost)\n\n**Machine Learning Process:**\n\n1. Data collection and preparation\n2. Feature selection and engineering\n3. Model selection and training\n4. Evaluation and tuning\n5. Deployment and monitoring\n\nMachine learning has become increasingly important across industries due to the growing availability of data, improved algorithms, and increased computing power, enabling solutions to complex problems that were previously difficult or impossible to solve with traditional programming approaches.",
          },
        ],
      },
    },
    time: new Date().toISOString(),
  },
];

// Made with Bob
