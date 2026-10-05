export const personalInfo = {
  name: "Sarapharaj Ansari",
  shortName: "Sarapharaj",
  role: "Full Stack Web Developer | MERN Stack Developer | AI Enthusiast",
  roles: [
    "Full Stack Web Developer",
    "MERN Stack Specialist",
    "AI & ML Enthusiast",
    "Computer Science Engineer (2027)"
  ],
  education: "B.Tech in Computer Science & Engineering",
  college: "Bansal Institute of Engineering & Technology, Lucknow",
  graduation: "2027",
  location: "Lucknow, Uttar Pradesh, India",
  phone: "+91 9682920950",
  email: "sarfrajansari0127@gmail.com",
  github: "https://github.com/sarfraj009",
  linkedin: "https://www.linkedin.com/in/sarapharaj-ansari-516725331",
  resumeUrl: "/Sarapharaj_Ansari_Resume.pdf",
  availability: "Open to Internship & Full-Time Opportunities",
  tagline: "Building scalable web applications with MERN, AI, and modern technologies.",
  bio: "Computer Science & Engineering undergraduate passionate about crafting high-performance full-stack web applications and exploring intelligent AI/ML systems. Experienced in architecting robust RESTful backends, reactive user interfaces, and solving real-world challenges through clean, maintainable code."
};

export const stats = [
  { label: "Projects Completed", value: "10+", description: "Full stack web & ML systems" },
  { label: "Core Specialization", value: "MERN", description: "Mongo, Express, React, Node" },
  { label: "AI/ML Solutions", value: "Real-time", description: "Computer vision & NLP models" },
  { label: "Graduation Year", value: "2027", description: "B.Tech Computer Science" }
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "Layout",
    description: "Crafting fast, responsive, and accessible user interfaces with modern reactive frameworks.",
    skills: [
      { name: "React.js", level: "Advanced", icon: "react" },
      { name: "Next.js", level: "Intermediate", icon: "nextjs" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "javascript" },
      { name: "Tailwind CSS", level: "Advanced", icon: "tailwind" },
      { name: "HTML5 & CSS3", level: "Expert", icon: "html" }
    ]
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "Server",
    description: "Architecting secure, scalable microservices, authentication systems, and robust APIs.",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "nodejs" },
      { name: "Express.js", level: "Advanced", icon: "express" },
      { name: "REST APIs", level: "Advanced", icon: "api" },
      { name: "JWT (JSON Web Tokens)", level: "Advanced", icon: "security" },
      { name: "Razorpay Gateway", level: "Intermediate", icon: "payment" },
      { name: "Cloudinary Media", level: "Intermediate", icon: "cloud" }
    ]
  },
  {
    id: "database",
    title: "Databases & Storage",
    icon: "Database",
    description: "Data modeling, schema design, and querying for relational and document-based databases.",
    skills: [
      { name: "MongoDB", level: "Advanced", icon: "mongodb" },
      { name: "Mongoose ODM", level: "Advanced", icon: "database" },
      { name: "MySQL", level: "Intermediate", icon: "mysql" }
    ]
  },
  {
    id: "programming",
    title: "Programming Languages",
    icon: "Code2",
    description: "Core algorithmic problem solving, object-oriented design, and systems foundations.",
    skills: [
      { name: "JavaScript", level: "Advanced", icon: "javascript" },
      // { name: "Python", level: "Advanced", icon: "python" },
      { name: "Java", level: "Intermediate", icon: "java" },
      // { name: "C++", level: "Intermediate", icon: "cpp" }
    ]
  },
  // {
  //   id: "aiml",
  //   title: "AI & Machine Learning",
  //   icon: "BrainCircuit",
  //   description: "Implementing predictive models, data analysis pipelines, and intelligent API integrations.",
  //   skills: [
  //     { name: "Python ML Stack", level: "Proficient", icon: "python" },
  //     { name: "Scikit-learn", level: "Intermediate", icon: "brain" },
  //     { name: "Pandas & NumPy", level: "Intermediate", icon: "data" },
  //     { name: "OpenCV", level: "Intermediate", icon: "camera" },
  //     { name: "AI APIs & LLMs", level: "Intermediate", icon: "sparkles" },
  //     { name: "Streamlit", level: "Intermediate", icon: "layout" }
  //   ]
  // },
  {
    id: "tools",
    title: "Developer Tools & Workflow",
    icon: "Wrench",
    description: "Modern version control, debugging, API testing, and deployment tooling.",
    skills: [
      { name: "Git", level: "Advanced", icon: "git" },
      { name: "GitHub", level: "Advanced", icon: "github" },
      { name: "VS Code", level: "Advanced", icon: "vscode" },
      { name: "Postman", level: "Advanced", icon: "postman" }
    ]
  }
];

export const projects = [
  {
    id: "eventora",
    name: "Eventora – Event Booking Platform",
    category: "mern",
    tagline: "End-to-end event ticketing system with Razorpay and digital QR verification",
    description: "A comprehensive event management and booking ecosystem built on the MERN stack. Empowers organizers to publish events, manage attendee tiers, and securely process payments, while providing attendees with digital QR-coded tickets for verified entrance.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "JWT", "QR Code Engine"],
    features: [
      "User authentication and role-based permissions (Organizers & Attendees)",
      "Dynamic event creation, banner management, and scheduling",
      "Seamless Razorpay payment gateway integration for real-time transactions",
      "Automated digital QR ticket generation upon confirmed payment",
      "Admin verification dashboard with instant ticket QR scanning & validation",
      "Order history, cancellation workflows, and analytical booking reports"
    ],
    architecture: "Built with a modular MVC architecture on Express.js, JWT for stateless authentication, Mongoose schemas for event scheduling and bookings, and an optimized React frontend with responsive booking flows.",
    github: "https://github.com/sarfraj009",
    demo: "https://github.com/sarfraj009",
    accentColor: "from-indigo-500 to-purple-600",
    gradientBorder: "rgba(99, 102, 241, 0.4)",
    badge: "Featured MERN Project"
  },
  // {
  //   id: "realstate",
  //   name: "RealState Platform",
  //   category: "mern",
  //   tagline: "Modern real estate marketplace with dual buyer/seller workflows & Cloudinary integration",
  //   description: "A scalable property listing and discovery platform built with the MERN stack. Designed for seamless interactions between property sellers and prospective buyers with rich multi-image uploads, location-based filtering, and secured communications.",
  //   technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Razorpay", "JWT"],
  //   features: [
  //     "Intuitive property listing submission with high-resolution image upload via Cloudinary",
  //     "Dedicated dual workflows tailored for Buyers and Sellers",
  //     "Advanced search and multi-parameter filtering (price, location, type, amenities)",
  //     "Secure JWT authentication and user profile management",
  //     "Integrated payment options for listing promotions and token fees",
  //     "Comprehensive seller dashboard to track listing views and inquiries"
  //   ],
  //   architecture: "RESTful API backend powered by Express and MongoDB with geospatial indexing for location queries, Cloudinary API integration for image optimization, and a reactive UI built with React.",
  //   github: "https://github.com/sarfraj009",
  //   demo: "https://github.com/sarfraj009",
  //   accentColor: "from-blue-500 to-cyan-500",
  //   gradientBorder: "rgba(6, 182, 212, 0.4)",
  //   badge: "Full Stack Marketplace"
  // },
  {
    id: "ai-ecommerce",
    name: "AI-Based E-Commerce Platform",
    category: "mern",
    tagline: "Intelligent shopping experience featuring AI recommendations and secure Stripe checkout",
    description: "An advanced e-commerce web platform integrating artificial intelligence to curate personalized product suggestions, predict consumer preferences, and deliver a frictionless shopping and payment checkout experience.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API", "AI Recommendation API", "Tailwind CSS"],
    features: [
      "AI-driven product recommendations based on browsing patterns and past orders",
      "Dynamic catalog with real-time stock inventory management",
      "Persistent shopping cart and wishlist synchronization",
      "Stripe payment gateway integration for global credit card processing",
      "Secure customer account portal with order tracking",
      "Admin analytics panel for revenue tracking, inventory alerts, and user metrics"
    ],
    architecture: "Combines MERN stack backend with external AI API integrations to analyze user behavior vectors, delivering contextual product recommendations alongside high-throughput cart and checkout operations.",
    github: "https://github.com/sarfraj009",
    demo: "https://github.com/sarfraj009",
    accentColor: "from-violet-500 to-fuchsia-600",
    gradientBorder: "rgba(168, 85, 247, 0.4)",
    badge: "AI + Full Stack"
  },
  {
    id: "house-price",
    name: "House Price Prediction",
    category: "aiml",
    tagline: "Supervised machine learning model for accurate real estate valuation",
    description: "An end-to-end machine learning project predicting residential real estate prices based on diverse property attributes. Includes a robust data preprocessing pipeline, feature engineering, and an interactive Streamlit web dashboard for real-time predictions.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Matplotlib / Seaborn"],
    features: [
      "Rigorous exploratory data analysis (EDA) and outlier detection",
      "Feature engineering and categorical encoding pipelines",
      "Supervised regression modeling evaluating RMSE and R-squared metrics",
      "Interactive Streamlit web interface for custom property attribute inputs",
      "Instantaneous real-time inference and valuation breakdown",
      "Visual distribution charts explaining feature significance"
    ],
    architecture: "Modular Python ML pipeline utilizing Scikit-learn regression pipelines saved via Joblib, served through a reactive Streamlit UI for immediate client-side inference.",
    github: "https://github.com/sarfraj009",
    demo: "https://github.com/sarfraj009",
    accentColor: "from-emerald-500 to-teal-600",
    gradientBorder: "rgba(16, 185, 129, 0.4)",
    badge: "Machine Learning"
  },
  {
    id: "spam-email",
    name: "Spam Email Detection",
    category: "aiml",
    tagline: "Natural Language Processing classifier distinguishing spam from ham messages",
    description: "An intelligent text classification application trained on extensive email datasets to identify spam messages with high accuracy. Utilizes NLP text preprocessing, TF-IDF vectorization, and a trained classification model accessible via an interactive web interface.",
    technologies: ["Python", "Scikit-learn", "NLTK", "TF-IDF Vectorizer", "Streamlit", "Pandas"],
    features: [
      "Text tokenization, stop-word removal, and Porter stemming pipeline",
      "TF-IDF vector representation of linguistic features",
      "High precision classification using Multinomial Naive Bayes / Random Forest",
      "Interactive web tool allowing direct copy-pasting of suspicious email text",
      "Immediate spam probability score and classification verdict",
      "Clean UI highlighting key spam indicators detected in the text"
    ],
    architecture: "Natural language processing pipeline implemented in Python with NLTK and Scikit-learn, evaluated with precision-recall metrics to minimize false positives, packaged into a Streamlit web app.",
    github: "https://github.com/sarfraj009",
    demo: "https://github.com/sarfraj009",
    accentColor: "from-amber-500 to-orange-600",
    gradientBorder: "rgba(245, 158, 11, 0.4)",
    badge: "NLP / Text ML"
  },
  // {
  //   id: "driver-drowsiness",
  //   name: "Driver Drowsiness Detection",
  //   category: "aiml",
  //   tagline: "Real-time computer vision system detecting driver fatigue and triggering alerts",
  //   description: "A safety-critical computer vision solution engineered to monitor driver fatigue in real time through webcam feeds. Calculates the Eye Aspect Ratio (EAR) using facial landmark detection and triggers warning alerts if eyes remain closed past a threshold.",
  //   technologies: ["Python", "OpenCV", "Machine Learning", "Facial Landmarks", "NumPy", "Audio Alert"],
  //   features: [
  //     "Real-time facial detection and 68-point facial landmark mapping",
  //     "Eye Aspect Ratio (EAR) metric calculation across consecutive video frames",
  //     "Configurable threshold sensitivity to prevent false alarms from natural blinking",
  //     "Instantaneous visual warning overlays on live camera feed",
  //     "Auditory alarm trigger when drowsiness state persists",
  //     "Low-latency execution optimized for real-time video stream processing"
  //   ],
  //   architecture: "Real-time video pipeline using OpenCV for frame capture, Haar cascades / facial landmark models for geometric eye feature extraction, and Euclidean distance computation to assess ocular state.",
  //   github: "https://github.com/sarfraj009",
  //   demo: "https://github.com/sarfraj009",
  //   accentColor: "from-rose-500 to-red-600",
  //   gradientBorder: "rgba(244, 63, 94, 0.4)",
  //   badge: "Computer Vision"
  // }
];

export const journeyTimeline = [
  {
    period: "2023 – Present",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Bansal Institute of Engineering & Technology, Lucknow",
    description: "Pursuing Bachelor of Technology with focus on core computational foundations: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Operating Systems.",
    type: "education",
    icon: "GraduationCap",
    tags: ["DSA", "DBMS", "Operating Systems", "C++", "Java"]
  },
  {
    period: "2024",
    title: "MERN Stack Summer Training",
    institution: "Digi Coders Technologies Pvt. Ltd., Lucknow",
    description: "Completed industry-focused summer training in MERN Stack development. Developed responsive full-stack applications with React.js, Node.js, Express.js, and MongoDB.",
    type: "training",
    icon: "Briefcase",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "MERN Stack"]
  },
  {
    period: "2024 – Present",
    title: "Full Stack Development & MERN Specialization",
    institution: "Project-Driven Learning & Production Architectures",
    description: "Engineered scalable web applications including Eventora (event ticketing platform with Razorpay and QR ticket verification) and RealState Platform (marketplace with Cloudinary & role-based workflows). Focused on REST APIs, JWT authentication, and responsive React UIs.",
    type: "project",
    icon: "Code2",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "JWT"]
  },
  {
    period: "2024 – Present",
    title: "AI & Machine Learning Explorations",
    institution: "Intelligent Systems & Applied Data Science",
    description: "Developed practical AI/ML solutions including real-time Driver Drowsiness Detection using OpenCV, Spam Email Classification using NLP, and House Price Regression. Exploring LLM integration and intelligent API microservices.",
    type: "ml",
    icon: "Brain",
    tags: ["Python", "Scikit-learn", "OpenCV", "NLP", "Streamlit", "AI APIs"]
  },
  {
    period: "2024 – Present",
    title: "Open Source & GitHub Development",
    institution: "Continuous Engineering & Community Projects",
    description: "Maintaining active open source repositories on GitHub (@sarfraj009). Consistently writing clean, well-documented code, practicing version control best practices, and collaborating on developer tooling.",
    type: "opensource",
    icon: "GitBranch",
    tags: ["Git", "GitHub", "Clean Architecture", "Code Quality"]
  }
];

export const educationDetails = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Science & Engineering",
  institution: "Bansal Institute of Engineering & Technology",
  location: "Lucknow, Uttar Pradesh, India",
  duration: "2023 – 2027",
  status: "Undergraduate (Pursuing)",
  cgpa: "7.79 / 10",
  highlights: [
    "Academic Performance: CGPA 7.79 / 10 in B.Tech CSE (Current)",
    "Core coursework in Data Structures, Algorithms, and Object-Oriented Software Design",
    "Hands-on lab work in Database Systems (SQL & MongoDB) and Computer Networks",
    "Class XII: MAVM, Kushinagar | UP Board | 64.6% (2023)",
    "Class X: KIMC, Deoria | UP Board | 84.6% (2021)"
  ],
  relevantCourses: [
    "Data Structures & Algorithms",
    "Java",  
    "Database Management (MongoDB)"
  ]
};

export const certifications = [
  {
    id: "cert-1",
    title: "Full Stack Web Development (MERN)",
    issuer: "Technical Training & Project Specialization",
    date: "2024",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    description: "Comprehensive hands-on curriculum covering modern frontend development, backend API creation, JWT authentication, and cloud database operations.",
    link: "https://github.com/sarfraj009",
    credentialId: "MERN-DEV-2024",
    status: "Verified Knowledge"
  },
    // {
    //   id: "cert-2",
    //   title: "Python for Data Science & Machine Learning",
    //   issuer: "Practical Machine Learning Certification",
    //   date: "2024",
    //   skills: ["Python", "Scikit-learn", "Pandas", "NumPy", "Data Preprocessing"],
    //   description: "Hands-on foundation in supervised and unsupervised learning algorithms, regression, classification, and statistical data visualization.",
    //   link: "https://github.com/sarfraj009",
    //   credentialId: "ML-PYTHON-2024",
    //   status: "Completed Course"
    // },
    // {
    //   id: "cert-3",
    //   title: "Postman API Fundamentals Student Expert",
    //   issuer: "Postman Academy",
    //   date: "2024",
    //   skills: ["REST APIs", "Postman", "API Testing", "HTTP Protocols"],
    //   description: "Mastery of REST API architecture, HTTP methods, authorization protocols, automated test scripts, and mock servers.",
    //   link: "https://github.com/sarfraj009",
    //   credentialId: "POSTMAN-EXP-2024",
    //   status: "Verified Credential"
    // },
    // {
    //   id: "cert-4",
    //   title: "Algorithmic Problem Solving & Data Structures",
    //   issuer: "Computer Science Foundation",
    //   date: "2024",
    //   skills: ["Algorithms", "C++", "Java", "Time/Space Complexity"],
    //   description: "Deep dive into linear and non-linear data structures, asymptotic notation, sorting algorithms, recursion, and dynamic programming.",
    //   link: "https://github.com/sarfraj009",
    //   credentialId: "DSA-FOUND-2024",
    //   status: "Coursework Verified"
    // }
];

export const githubShowcase = {
  username: "sarfraj009",
  profileUrl: "https://github.com/sarfraj009",
  bio: "Full Stack Web Developer | MERN Stack & AI Enthusiast | CSE Undergraduate @ BIET Lucknow",
  stats: {
    publicRepos: "12+",
    contributions: "350+ Commits",
    primaryLanguages: ["JavaScript", "Python", "C++", "HTML/CSS"],
    activeStreak: "Consistent Coding"
  },
  topRepos: [
    {
      name: "Eventora-Ticket-Platform",
      description: "Full-featured event ticketing platform with Razorpay checkout and QR verification.",
      language: "JavaScript",
      stars: 4,
      forks: 1,
      url: "https://github.com/sarfraj009"
    },
    // {
    //   name: "RealState-MERN-App",
    //   description: "Real estate marketplace connecting buyers and sellers with Cloudinary image hosting.",
    //   language: "JavaScript",
    //   stars: 3,
    //   forks: 1,
    //   url: "https://github.com/sarfraj009"
    // },
    // {
    //   name: "Driver-Drowsiness-Detection",
    //   description: "Computer vision application tracking Eye Aspect Ratio with OpenCV in real time.",
    //   language: "Python",
    //   stars: 5,
    //   forks: 2,
    //   url: "https://github.com/sarfraj009"
    // },
    {
      name: "House-Price-Prediction-ML",
      description: "End-to-end regression model with Streamlit interactive parameter dashboard.",
      language: "Python",
      stars: 2,
      forks: 0,
      url: "https://github.com/sarfraj009"
    }
  ]
};
