import { string } from "three/tsl";
import {
    mobile,
    backend,
    creator,
    web,
    typescript,
    aws,
    post,
    flask,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    spark,
    git,
    njit,
    kafka,
    docker,
    finance,
    summarizer,
    word,
    python,
    trello,
    express,
    Youtube,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Backend Developer",
      icon: backend,
    }, 
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software Engineer",
      icon: mobile,
    },
    {
      title: "Data Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Postgre SQL",
      icon: post,
    },
    {
      name: "AWS" , 
      icon: aws,
// "https://www.credly.com/badges/da2f0088-c743-4960-8f3e-9917687748b8/public_url"
    },
    {
      name: "React JS",
      icon: reactjs,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "Kafka",
      icon: kafka,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },

    
    {
      name: "Spark",
      icon: spark,
    },
  ];
  
  const experiences = [
 
    {
      title: "Undergraduate Computer Science tutor",
      company_name: "New Jersey Institute of Technology",
      icon: njit,
      iconBg: "#E6DEDD",
      date: "January 2024 – May 2024",
      points: [
        "Mentored 15+ peers in core programming (OOP, algorithms) and software development concepts in Python and SQL.",
        "Assisted students in debugging, optimizing code, and implementing algorithms, improving their problem-solving skills and coding efficiency.",
      ],
    },
    
    
  ];
  

  
  const projects = [
    {
      name: "Trello - Clone",
  description: [
    " Designed and developed a Trello-like task management system with a modern UI using Next.js, React.js, and Redux for efficient state management. \n",
    "Integrated role-based project and task management, allowing teams to assign tasks, set deadlines, and prioritize work efficiently.",
    "Engineered a RESTful API with Express.js and Node.js, utilizing Prisma ORM with PostgreSQL for structured data storage and retrieval.",
    "Deployed on AWS, leveraging EC2 for hosting, RDS for database management, Amplify for frontend deployment, S3 for file storage, API Gateway for backend communication, and Cognito for future authentication expansion."
  ],
  
  tags: [
    { name: "TypeScript", color: "blue-text-gradient" },
    { name: "Next.js", color: "purple-text-gradient" },
    { name: "React.js", color: "blue-text-gradient" },
    { name: "Redux", color: "red-text-gradient" },
    { name: "Express.js", color: "yellow-text-gradient" },
    { name: "Node.js", color: "green-text-gradient" },
    { name: "Prisma", color: "pink-text-gradient" },
    { name: "PostgreSQL", color: "cyan-text-gradient" },
    { name: "AWS", color: "orange-text-gradient" },
    { name: "Tailwind CSS", color: "blue-text-gradient" }
  ],
      image: trello,
      source_code_link: "https://github.com/yashah9/Trello-Clone",
    },
    {
      name: "BudgetBuddy (Finance Tracker)",
      description: [
        "Developed a full-stack finance tracking system, enabling users to efficiently manage expenses and income with MySQL relational data handling.",
        "Implemented filtering and sorting options for transaction data, allowing users to organize financial records by date, category, and amount for better analysis.",
        "Created a customer service chatbot that facilitated step-by-step navigation for users on the website, leading to a 20% decrease in abandonment rates and empowering users with instant access to information."
      ],
  
      tags: [
        { name: "JavaScript", color: "yellow-text-gradient" },
        { name: "MySQL", color: "blue-text-gradient" },
        { name: "PHP", color: "purple-text-gradient" },
        { name: "Python", color: "green-text-gradient" },
        { name: "HTML", color: "orange-text-gradient" },
        { name: "CSS", color: "pink-text-gradient" }
      ],
      image: finance,
      source_code_link: "https://github.com/yashah9/Finance_Tracker",
    },
    {
      name: "Word-Drop (Typing Game)",
      description: [
        "Led a team in designing and developing an interactive typing game using React.js, improving user engagement.",
        "Integrated Auth0 authentication to provide secure user login and session management.",
        "Introduced game mechanics such as power-ups, score multipliers, and WPM tracking, leading to improved user retention and also resulting in a personal 10 WPM increase in typing speed."
      ],
      
      tags: [
        { name: "React.js", color: "blue-text-gradient" },
        { name: "Firebase", color: "orange-text-gradient" },
        { name: "Auth0", color: "purple-text-gradient" },
        { name: "HTML", color: "yellow-text-gradient" },
        { name: "CSS", color: "pink-text-gradient" }
      ],
          image: word,
          source_code_link: "https://github.com/yashah9/Word-Drop-TypingGame-",
    },
    {
      name: "YouTube Clone",
      description: [
        "Developed a YouTube-inspired web application with video upload, processing, and streaming capabilities using Next.js and Firebase.",
        "Built a scalable backend pipeline with Node.js and Google Cloud Functions to handle file uploads, format conversions, and cloud storage.",
        "Deployed containerized services with Docker on Google Cloud Run, optimizing resource allocation with serverless infrastructure."
      ],
    
      tags: [
        { name: "React.js", color: "blue-text-gradient" },
        { name: "Next.js", color: "purple-text-gradient" },
        { name: "Express.js", color: "yellow-text-gradient" },
        { name: "Firebase", color: "orange-text-gradient" },
        { name: "Google Cloud", color: "cyan-text-gradient" },
        { name: "Docker", color: "blue-text-gradient" },
        { name: "TypeScript", color: "red-text-gradient" }
      ],
      image: Youtube,
      source_code_link: "https://github.com/yashah9/Youtube-clone",
    },
    {
      name: "AI Text Summarization Web Application",
      description: [
        "Designed a responsive and accessible UI using Tailwind CSS, ensuring a seamless user experience across different devices.",
        "Built an NLP-powered text summarization tool using FastAPI and Flask, reducing document processing time by ~3 seconds on average."
        
      ],
      
      tags: [
        { name: "Python (Flask, NLTK)", color: "orange-text-gradient" },
        { name: "HTML", color: "yellow-text-gradient" },
        { name: "Tailwind CSS", color: "pink-text-gradient" }
      ],
          image: summarizer,
          source_code_link: "https://github.com/yashah9/Summarizer",
    },
  ];
  
  export { services, technologies, experiences, projects };
  