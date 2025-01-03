import project1 from "../assets/projects/project1.png"
import project5 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import certifications1 from "../assets/certifications/certifications1.png";
import certifications2 from "../assets/certifications/certifications2.png"

export const ABOUT_TEXT = `I am Emad Mohammed Habibi, a seasoned professional specializing in MERN stack development, artificial intelligence, data science, security systems, and server management. Growing up in a multicultural environment has equipped me with a global perspective and adaptability. My internships in India and Saudi Arabia have honed my expertise in ERP systems, AI, security, and web technologies, enabling me to deliver robust solutions in diverse settings. I am actively involved with Toastmasters and the Hidayah Foundation, demonstrating my commitment to leadership and community engagement. Passionate about innovation, I strive to create impactful solutions that drive transformative growth and efficiency. With a strong foundation in both technical and soft skills, I excel in collaborative, forward-thinking teams.`;

export const EXPERIENCES = [
  {
    year: "20 June - 20 September 2024",
    role: "Intern",
    company: "Eftychia Technologies",
    description: `Contributed to developing and deploying full-stack web applications using MongoDB, React.js, Node.js, and Express APIs. Created and deployed RESTful APIs for efficient data integration. Gained hands-on experience in optimizing web pages for user accessibility. Demonstrated a strong understanding of front-end and back-end technologies to ensure reliable project delivery."`,
    technologies: ["Javascript", "React.js", "mongoDB", "Express"],
  },
  {
    year: "4 January - 4 February 2024",
    role: "Intern",
    company: "Al Rushaid Technologies",
    description: `Explored enterprise resource planning systems, networking, and server management to understand their organizational applications. Contributed to planning and blueprinting processes to ensure project objectives are met. Engaged in security management with blockchain technologies to enhance operational resilience. Developed AI-driven digital solutions to implement innovative approaches for various business functions.`,
    technologies: ["Enterprise Resource Planning", "Networking", "Server Management", "AI and Digital Solutions", "Blockchain Technologies", "Planning and Blueprinting", "Security Managemnt"],
  },
  {
    year: "12 February - 13 March 2023",
    role: "Intern",
    company: "Mindstack Technologies",
    description: `Developed foundational web interfaces using HTML5, CSS, and Bootstrap, enhancing my skills in front-end design. Collaborated with team members to understand the basics of integrating user interfaces with backend components. Focused on implementing responsive layouts, improving the overall user experience and visual appeal for web applications.`,
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
];

export const PROJECTS = [
  {
    title: "Genius: Unlock the power of AI",
    image: project1,
    description:
      "Genius is an AI-powered platform that combines conversation, image, and code generation to bring innovative solutions to life. With OpenAI's GPT-3.5 Turbo for conversational and code generation and DALL·E for image creation, users can unlock endless possibilities. Seamlessly integrated with a user-friendly interface.",
    technologies: ["Next.js", "Vercel","React","Clerk","GPT 3.5Turbo","DALL-E"],
  },
  {
    title: "Twitter Clone",
    image: project2,
    description:
      "Developed a social media app featuring user authentication, post management, and follow recommendations. Built with the MERN stack and Tailwind CSS for responsiveness, using Cloudinary for instant image uploads.",
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
      "Developed a deep learning model for high-accuracy classification of cat and dog images using a 4,000-image dataset. Created a real-time face mask detection system with OpenCV, TensorFlow, and Keras, achieving 99.25% accuracy in compliance detection.",
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
    title: "IBM Data Science",
    image: certifications2,
    description:
      "In this Professional Certificate, learners developed hands-on skills in Data Science and Machine Learning, including Python, SQL, and Data Visualization, culminating in a Capstone Project.",
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
