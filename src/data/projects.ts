import { ProjectItem } from '../types/portfolio';

export const projectsData: ProjectItem[] = [
  {
    id: 'explainable-moo-defect-prediction',
    title: 'Explainable Multi-Objective Metaheuristic Optimization for Software Defect Prediction',
    subtitle: 'Research-Oriented Explainable AI & Evolutionary Multi-Objective Optimization',
    category: 'Research',
    featured: true,
    tags: ['NSGA-II', 'Genetic Algorithm', 'Particle Swarm Optimization', 'SHAP', 'Machine Learning'],
    description: 'A research-oriented software defect prediction project exploring multi-objective metaheuristic optimization and explainable AI techniques to improve software defect prediction.',
    longDescription: 'This research investigation addresses the dual challenges of predictive efficacy and black-box opacity in software defect prediction. By formulating defect prediction as a multi-objective search problem, the system utilizes metaheuristic optimization strategies—specifically NSGA-II, Genetic Algorithms (GA), and Particle Swarm Optimization (PSO)—to balance trade-offs across competing objectives such as maximizing defect discovery while minimizing inspection costs. To foster practitioner trust and code auditability, SHAP (SHapley Additive exPlanations) is incorporated to interpret feature importance and explain individual module risk predictions.',
    highlights: [
      'Multi-objective optimization formulating defect prediction trade-offs',
      'NSGA-II Pareto-optimal frontier exploration',
      'Genetic Algorithm & Particle Swarm Optimization comparisons',
      'SHAP-based explainability for transparent module risk interpretation',
      'Software defect prediction oriented for maintainability and QA prioritization'
    ],
    githubUrl: 'https://github.com/sneha12jyoti/Explainable-Multi-Objective-Metaheuristic-Optimization-for-Software-Defect-Prediction-.git',
    architectureDetails: {
      overview: 'End-to-end research pipeline integrating software metric feature extraction, multi-objective Pareto optimization, ML classification, and SHAP post-hoc interpretability.',
      keyModules: [
        {
          title: 'Multi-Objective Search Formulation',
          detail: 'Configures fitness functions balancing defect recall against inspection overhead, driving NSGA-II, GA, and PSO algorithms to discover non-dominated solution sets.'
        },
        {
          title: 'Metaheuristic Optimization Engine',
          detail: 'Implements crossover, mutation, and particle velocity updates to explore hyperparameter configurations and feature subsets.'
        },
        {
          title: 'Explainability & Interpretation (SHAP)',
          detail: 'Computes global and local Shapley values to identify critical code attributes (complexity, coupling, churn) driving predicted defect vulnerability.'
        }
      ],
      algorithmsOrStack: ['NSGA-II', 'Genetic Algorithm (GA)', 'Particle Swarm Optimization (PSO)', 'SHAP (SHapley Additive exPlanations)', 'Scikit-learn', 'Python']
    }
  },
  {
    id: 'medibot',
    title: 'MediBot',
    subtitle: 'AI-Powered Healthcare Conversational Assistant',
    category: 'AI / ML',
    tags: ['Artificial Intelligence', 'Healthcare', 'Conversational AI', 'NLP', 'Python'],
    description: 'An AI-powered healthcare chatbot designed to provide an interactive conversational experience for healthcare-related queries.',
    longDescription: 'MediBot is an interactive conversational system developed to assist users by answering general health inquiries and providing structured health-related information. The application focuses on conversational flow, natural language query processing, and responsive interface design to deliver user-centric healthcare assistance.',
    highlights: [
      'Conversational AI interface dedicated to healthcare queries',
      'Interactive chat interface with responsive turn-by-turn dialogue',
      'Clear modular separation between conversational intent handling and UI rendering',
      'Designed to provide informative health guidance responsibly'
    ],
    githubUrl: 'https://github.com/sneha12jyoti/MediBot.git',
    architectureDetails: {
      overview: 'Client-server conversational pipeline processing natural language queries, matching intent patterns, and delivering contextual health information.',
      keyModules: [
        {
          title: 'Conversational Dialogue Agent',
          detail: 'Parses input queries, structures dialog context, and generates informative responses for common wellness and health questions.'
        },
        {
          title: 'User Interface & Interaction Layer',
          detail: 'Real-time chat experience with message persistence, status indicators, and clean typography.'
        }
      ],
      algorithmsOrStack: ['Python', 'Natural Language Processing', 'Conversational AI', 'Interactive UI']
    }
  },
  {
    id: 'power-systems-fault-diagnosis',
    title: 'Fault Diagnosis in Power Systems Using ML & DL',
    subtitle: 'Research Project | National Institute of Technology, Jamshedpur',
    category: 'Research',
    tags: ['Machine Learning', 'Deep Learning', 'CNN', 'LSTM', 'Power Systems'],
    description: 'A research project focused on investigating machine learning and deep learning techniques for identifying and classifying faults in power systems.',
    longDescription: 'Developed during research at NIT Jamshedpur, this project evaluates the effectiveness of advanced deep learning architectures—specifically Convolutional Neural Networks (CNN) and Long Short-Term Memory (LSTM) networks—in diagnosing and classifying electrical transmission and power system faults. The study investigates how spatial feature extraction and temporal sequential modeling perform under fluctuating operational states and noise.',
    highlights: [
      'Connected with Summer Research Internship at NIT Jamshedpur',
      'Power-system fault diagnosis under various operational conditions',
      'CNN architectures for spatial pattern extraction from signal waveforms',
      'LSTM architectures for temporal dependency modeling across disturbance sequences',
      'Rigorous evaluation with emphasis on classification performance and model reliability'
    ],
    githubUrl: 'https://github.com/sneha12jyoti/fault-diagnosis-in-powersystems-using-machine-learning-and-deep-learning.git',
    architectureDetails: {
      overview: 'Signal acquisition, feature engineering, and dual CNN-LSTM deep learning pipelines designed for robust fault classification.',
      keyModules: [
        {
          title: 'Power System Signal Preprocessing',
          detail: 'Normalizes voltage and current waveform data across simulated and operational fault occurrences.'
        },
        {
          title: 'CNN Feature Extractor',
          detail: 'Captures localized disturbance characteristics and harmonic shifts from time-series signal segments.'
        },
        {
          title: 'LSTM Temporal Classifier',
          detail: 'Tracks recurrent state transitions across successive wave cycles to pinpoint fault inception and category.'
        }
      ],
      algorithmsOrStack: ['CNN', 'LSTM', 'Python', 'Deep Learning', 'Signal Preprocessing', 'Scikit-learn']
    }
  },
  {
    id: 'snapclass-ai-attendance',
    title: 'SnapClass: AI Attendance System',
    subtitle: 'Dual-Factor Biometric Verification Platform',
    category: 'Full Stack',
    tags: ['Python', 'Streamlit', 'Computer Vision', 'Facial Recognition', 'Voice Authentication', 'Supabase'],
    description: 'An AI-based attendance management system that combines facial recognition and voice authentication to improve identity verification and reduce proxy attendance.',
    longDescription: 'SnapClass solves the long-standing challenge of attendance fraud and proxy marking in educational institutions. By coupling facial recognition algorithms with voice authentication, the system ensures multi-modal identity validation before marking student presence. Built with a responsive Streamlit frontend and backed by Supabase cloud storage, SnapClass provides automated logging, profile management, and audit-ready attendance reporting.',
    highlights: [
      'Dual biometric validation combining facial recognition and voice authentication',
      'Mitigates proxy attendance via multi-modal verification',
      'Automated attendance tracking with timestamps and status logs',
      'Student record management and administrative dashboards',
      'Cloud data synchronization and storage with Supabase'
    ],
    githubUrl: 'https://github.com/sneha12jyoti/ai-attendance-project-app',
    architectureDetails: {
      overview: 'Multi-modal biometric pipeline capturing camera frames and audio samples, verifying against registered student profiles, and writing records to Supabase.',
      keyModules: [
        {
          title: 'Computer Vision Face Pipeline',
          detail: 'Detects facial landmarks, extracts biometric embeddings, and compares against enrolled student databases.'
        },
        {
          title: 'Voice Authentication Module',
          detail: 'Analyzes spoken audio samples to authenticate voiceprints and prevent static photo spoofing.'
        },
        {
          title: 'Supabase Database Integration',
          detail: 'Maintains real-time tables for student rosters, daily logs, and verification status with cloud reliability.'
        }
      ],
      algorithmsOrStack: ['Python', 'Streamlit', 'OpenCV / Face Recognition', 'Voice Verification', 'Supabase', 'SQL']
    }
  },
  {
    id: 'mental-health-score',
    title: 'Mental Health Score (Mansik-Santulan-Score)',
    subtitle: 'Student Wellness Behavioral Analysis Platform',
    category: 'AI / ML',
    tags: ['Python', 'Flask', 'Scikit-learn', 'JavaScript', 'HTML/CSS'],
    description: 'A machine-learning-powered student wellness application that analyses factors such as daily habits, sleep, and stress to predict a mental health score on a scale of 0–10.',
    longDescription: 'Mental Health Score is an interactive wellness tool engineered to raise student self-awareness around lifestyle factors affecting mental equilibrium. By taking inputs regarding sleep quality, academic workload, exercise, and stress levels, a trained Scikit-learn model outputs an indicative wellness score between 0 and 10 along with data-driven lifestyle insights. Note: Developed as an educational wellness aid, not a clinical diagnostic instrument.',
    highlights: [
      'Machine learning predictive modeling using Scikit-learn',
      'Evaluates lifestyle factors: daily sleep, routine, activity, and subjective stress',
      'Generates an indicative wellness score on a calibrated scale of 0 to 10',
      'Lightweight Flask REST backend communicating with an interactive client',
      'Actionable lifestyle insights grounded in data-driven behavioral analysis'
    ],
    githubUrl: 'https://github.com/sneha12jyoti/MENTAL-HEALTH-SCORE',
    architectureDetails: {
      overview: 'Lightweight web architecture coupling a Flask micro-service with a Scikit-learn regression/classification pipeline and an intuitive frontend assessment form.',
      keyModules: [
        {
          title: 'Wellness Assessment Input Interface',
          detail: 'Captures multidimensional self-reported metrics including sleep duration, study hours, physical activity, and stress indicators.'
        },
        {
          title: 'Scikit-learn Predictive Model',
          detail: 'Standardizes input parameters and calculates the corresponding 0–10 wellness index score.'
        },
        {
          title: 'Flask REST API Layer',
          detail: 'Handles endpoint routing, payload validation, and serves prediction results with low latency.'
        }
      ],
      algorithmsOrStack: ['Python', 'Flask', 'Scikit-learn', 'JavaScript', 'HTML5', 'CSS3']
    }
  },
  {
    id: 'packet-analyzer',
    title: 'Packet Analyzer: Deep Packet Inspection Engine',
    subtitle: 'High-Concurrency Network Protocol Parsing & Flow Engine',
    category: 'Java / Systems',
    tags: ['Java', 'Multithreading', 'Computer Networks', 'TCP/IP', 'PCAP'],
    description: 'A Java-based packet analysis engine designed to inspect network traffic, parse protocol headers, classify application traffic, and analyse network flows.',
    longDescription: 'Engineered in core Java to demonstrate high-performance systems engineering and computer networking concepts, this Deep Packet Inspection (DPI) engine parses raw network capture files (PCAP). Utilizing a multi-threaded producer-consumer architecture, it decomposes raw octets across Ethernet, IP, TCP, and UDP layers, reassembles conversation flows, and classifies network payloads with configurable filtering rules.',
    highlights: [
      'Binary PCAP file parsing with strict byte-level header decoding',
      'Layer 3 & Layer 4 protocol parsing (IPv4, IPv6, TCP, UDP, ICMP)',
      'Concurrent packet processing via multithreaded producer-consumer queues',
      'Bidirectional network flow tracking and 5-tuple conversation grouping',
      'Rule-based packet filtering engine for deep inspection and traffic classification'
    ],
    githubUrl: 'https://github.com/sneha12jyoti',
    architectureDetails: {
      overview: 'High-throughput packet parsing pipeline utilizing concurrent worker threads, memory-efficient byte buffering, and structured flow aggregation.',
      keyModules: [
        {
          title: 'PCAP Binary Reader & Dissector',
          detail: 'Extracts packet headers, timestamps, and payload slices from standardized libpcap capture formats.'
        },
        {
          title: 'Multi-Threaded Producer-Consumer Queue',
          detail: 'Decouples packet ingestion from deep header decoding using thread-safe blocking queues and worker pools.'
        },
        {
          title: 'Flow Reassembly & Classifier',
          detail: 'Hashes IP 5-tuples to correlate packets into persistent communication sessions and detect protocol behaviors.'
        }
      ],
      algorithmsOrStack: ['Java', 'Multithreading & Concurrency', 'TCP/IP Protocol Stack', 'PCAP Parsing', 'Producer-Consumer Architecture']
    }
  }
];
