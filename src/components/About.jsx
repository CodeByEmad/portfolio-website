// import aboutImg from "../assets/about.jpg";
// import { ABOUT_TEXT } from "../constants";
// import { motion } from "framer-motion";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";

// // Skill Data
// const skills = [
//   { name: "Software Engineering", percentage: 89 },
//   { name: "Data Science", percentage: 90 },
//   { name: "Web Development", percentage: 95 },
// ];

// const About = () => {
//   const [progressValues, setProgressValues] = useState(skills.map(() => 0));
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

//   useEffect(() => {
//     if (!inView) return;

//     const interval = setInterval(() => {
//       setProgressValues((prev) => {
//         let allDone = true;
//         const updated = prev.map((val, i) => {
//           if (val < skills[i].percentage) {
//             allDone = false;
//             return val + 1;
//           }
//           return skills[i].percentage;
//         });

//         if (allDone) clearInterval(interval);
//         return updated;
//       });
//     }, 20);

//     return () => clearInterval(interval);
//   }, [inView]);

//   return (
//     <div
//       className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-[0_0_30px_rgba(133,11,195,0.15)] p-4 lg:p-8 mt-16"
//       ref={ref}
//     >
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 1.5 }}
//         className="my-12 text-center text-4xl"
//       >
//         About <span className="text-neutral-500">Me</span>
//       </motion.h2>

//       <div className="flex flex-col lg:flex-row items-center lg:items-start">
//         <motion.div
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: -100 }}
//           transition={{ duration: 0.5 }}
//           className="w-full lg:w-1/2 flex justify-center"
//         >
//           <img
//             className="rounded-2xl w-full max-w-xs shadow-lg mb-4"
//             src={aboutImg}
//             alt="about"
//           />
//         </motion.div>

//         <motion.div
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: 100 }}
//           transition={{ duration: 0.5 }}
//           className="w-full md:w-1/2 px-2"
//         >
//           <p className="text-justify text-neutral-300 mb-8">{ABOUT_TEXT}</p>

//           <div className="flex flex-wrap justify-center gap-10">
//             {skills.map((skill, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="w-20 h-20 md:w-24 md:h-24">
//                   <CircularProgressbar
//                     value={progressValues[index]}
//                     maxValue={100}
//                     text={`${progressValues[index]}%`}
//                     circleRatio={0.85} // this shortens the circle
//                     styles={buildStyles({
//                       strokeLinecap: "round",
//                       textSize: "16px",
//                       textColor: "#fff",
//                       pathColor: "#850BC3",
//                       trailColor: "#2e2e2e",
//                     })}
//                   />
//                 </div>
//                 <p className="mt-2 text-sm md:text-base font-medium text-white">
//                   {skill.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default About;




import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Skill Data
const skills = [
  { name: "Data Science", percentage: 93 },
  { name: "Web Development", percentage: 95 },
  { name: "Power BI", percentage: 89 },
  { name: "Software Engineer", percentage: 91 },
  { name: "UI/UX Design", percentage: 88 },
  { name: "ERP Systems", percentage: 92 },
  { name: "Digital Transformations", percentage: 89 },
  { name: "Support Engineer", percentage: 87 },
  { name: "Sales", percentage: 91 },
  { name: "Security Systems", percentage: 86 },
];

const VISIBLE_COUNT = 3;
const ITEM_WIDTH = window.innerWidth < 640 ? 140 : 160;

const About = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [progressValues, setProgressValues] = useState(skills.map(() => 0));
  const intervalRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;

    intervalRef.current = setInterval(() => {
      setProgressValues((prev) => {
        const updated = prev.map((val, i) => {
          if (val < skills[i].percentage) {
            return Math.min(val + 1, skills[i].percentage);
          }
          return val;
        });

        const allDone = updated.every(
          (val, i) => val >= skills[i].percentage
        );
        if (allDone && intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }

        return updated;
      });
    }, 20);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [inView]);

  const handleNext = () => {
    if (startIndex + VISIBLE_COUNT < skills.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div
      className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-[0_0_30px_rgba(133,11,195,0.15)] p-4 lg:p-8 mt-16"
      ref={ref}
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-12 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            className="rounded-2xl w-full max-w-xs shadow-lg mb-4"
            src={aboutImg}
            alt="about"
          />
        </motion.div>

        {/* Text + Skills Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 px-2"
        >
          <p className="text-justify text-neutral-300 mb-8">{ABOUT_TEXT}</p>

          {/* Skills Carousel */}
          <div className="relative mt-4 mx-auto overflow-x-hidden w-full sm:w-[540px] ">
            <motion.div
              className="flex"
              animate={{ x: -startIndex * ITEM_WIDTH }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ width: skills.length * ITEM_WIDTH }}
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center flex-shrink-0"
                  style={{ width: ITEM_WIDTH }}
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 mx-auto">
                    <CircularProgressbar
                      value={progressValues[index]}
                      maxValue={100}
                      text={`${progressValues[index]}%`}
                      circleRatio={0.85}
                      styles={buildStyles({
                        textColor: "#ffffff",
                        pathColor: "#850BC3",
                        trailColor: "#2e2e2e",
                        textSize: "16px",
                        strokeLinecap: "round",
                      })}
                    />
                  </div>
                  <p className="mt-2 text-sm md:text-base font-medium text-white text-center">
                    {skill.name}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Left Arrow */}
            {startIndex > 0 && (
              <button
                onClick={handlePrev}
                className="absolute left-2 top-[36%] transform -translate-y-1/2 p-2 bg-neutral-800 rounded-full hover:bg-neutral-600 transition z-10 sm:top-[31%]"
              >
                <FaArrowLeft className="text-white" />
              </button>
            )}

            {/* Right Arrow */}
            {startIndex + VISIBLE_COUNT < skills.length && (
              <button
                onClick={handleNext}
                className="absolute right-2 top-[36%] transform -translate-y-1/2 p-2 bg-neutral-800 rounded-full hover:bg-neutral-600 transition z-10 sm:top-[31%]"
              >
                <FaArrowRight className="text-white" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
