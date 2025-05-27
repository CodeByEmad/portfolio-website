import project1 from "../assets/projects/project1.png"
import project5 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import certifications1 from "../assets/certifications/certifications1.png";
import certifications2 from "../assets/certifications/certifications2.png"
import certification3 from "../assets/certifications/certification3.jpg"

export const ABOUT_TEXT = `I'm Emad Mohammed Habibi, a MERN stack developer with expertise in AI, data science, security systems, and server management. My multicultural background and internships in India and Saudi Arabia have sharpened my skills in ERP and web technologies. I actively engage in leadership and community work through Toastmasters and the Hidayah Foundation. Passionate about innovation, I thrive in collaborative teams, building impactful solutions that drive growth and efficiency.`;

export const EXPERIENCES = [
  {
    year: "17 February - 30 April 2025",
    role: "Software Engineer - Intern",
    company: "Winman Software LLP",
    description: `Worked on India’s No.1 Chartered Accountant software suite, Winman CA-ERP. Focused on software testing, debugging, and ensuring quality assurance. Contributed to maintaining high reliability and performance standards.`,
    technologies: ["Testing & Debugging", "STLC", "SDLCC"],
  },
  {
    year: "16 January - 17 May 2025",
    role: "Salesforce Developer (Hybrid)",
    company: "Novigo Solutions",
    description: `Worked on Salesforce administration and development with a specialization in flows, triggers, automation, Apex, SOQL/SOSL, and front-end technologies such as VF Page, Aura, and LWC.`,
    technologies: ["Salesforce", "Apex", "Flows","Triggers","LWC"],
  },
  {
    year: "20 June - 20 September 2024",
    role: "Associate Developer",
    company: "Eftychia Technologies",
    description: `Built and deployed full-stack web apps using MongoDB, React.js, Node.js, and Express. Developed RESTful APIs and optimized pages for accessibility. Applied solid front- and back-end skills for smooth, reliable delivery.`,
    technologies: ["Javascript", "React.js", "mongoDB", "Express","Nodejs"],
  },
  {
    year: "4 January - 4 February 2024",
    role: "Sales & Technical Support",
    company: "Al Rushaid Technologies",
    description: `Explored ERP systems, networking, and server management to understand organizational use. Contributed to project planning, security via blockchain, and built AI-driven solutions to boost business innovation.`,
    technologies: ["ERP","Microsoft Dynamics 365", "Networking", "Server Management", "AI and Digital Solutions", "Blockchain Technologies", "Microsoft Projects", "Security Managemnt"],
  },
  {
    year: "12 February - 13 March 2023",
    role: "Frontend Developer Intern",
    company: "Mindstack Technologies",
    description: `Built responsive web interfaces using HTML5, CSS, and Bootstrap, improving front-end design skills. Collaborated on integrating UI with backend components to enhance user experience and visual appeal.`,
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
];

export const PROJECTS = [
  {
    title: "Genius: Unlock the power of AI",
    image: project1,
    description:
      "Genius is an AI-powered platform integrating GPT-3.5 Turbo and DALL·E for seamless conversation, code, and image generation. It offers a user-friendly interface to unlock innovative, creative solutions effortlessly.",
    technologies: ["Next.js", "Vercel","React","Clerk","GPT 3.5Turbo","DALL-E"],
  },
  {
    title: "Twitter Clone",
    image: project2,
    description:
      "Developed a social media app with user authentication, post management, and follow suggestions using the MERN stack. Integrated Tailwind CSS for responsive design and Cloudinary for real-time image uploads.",
    technologies: ["MongoDB", "Express", "React", "TailwindCSS", "Cloudinary", "NodeJS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing my projects, technical skills, and professional background. Features engaging intros, detailed project pages, and easy access to contact information for potential collaborations.",
    technologies: ["HTML", "CSS", "React", "Framer Motion"],
  },
  {
    title: "Image Based Recognition and Classification",
    image: project4,
    description:
      "Developed a deep learning model to classify cat and dog images using a 4,000-image dataset. Built a real-time face mask detection system with OpenCV, TensorFlow, and Keras, achieving 99.25% accuracy.",
    technologies: ["Convolutional Neural Network", "OpenCV", "TensorFlow", "Keras"],
  },
  {
    title: "E-Mart: E-commerce Website",
    image: project5,
    description:
      "Designed 'E-mart,' an intuitive e-commerce site with a visually appealing, user-friendly interface built with HTML and CSS. Optimized for responsive design to ensure seamless navigation across all devices",
    technologies: ["HTML", "CSS"],
  },
];

export const CERTIFICATIONS = [
  {
    title: "Microsoft Power BI",
    image: certification3,
    description:
      "Developed hands-on skills in data modeling, transformation, and visualization using Microsoft Power BI. Created interactive dashboards to extract insights and support business decisions.",
    technologies: ["Data Analysis", "Machine Learning","Databases & SQL for Data Science","Data Science Methodologies"],
  },
  {
    title: "IBM Data Science",
    image: certifications2,
    description:
      "In this Professional Certificate, I developed hands-on skills in Data Science and Machine Learning, including Python, SQL, and Data Visualization, culminating in a Capstone Project.",
    technologies: ["Data Analysis", "Machine Learning","Databases & SQL for Data Science","Data Science Methodologies"],
  },
  {
    title: "Finance for Non-Financial Professional",
    image: certifications1,
    description:
      "This course offers a foundational understanding of finance and accounting concepts to help impact financial decisions, improve profitability, and analyze financials.",
    technologies: ["Financial Ratios", "Valuation", "Costing", "Financial Statements", "Financial Principles"],
  },
];

export const CONTACT = {
  address: "Mangalore ,karnataka.India-575003 ",
  phoneNo: "+91 8861576020 | +966 508315325",
  email: "emadyanbu@gmail.com",
};
