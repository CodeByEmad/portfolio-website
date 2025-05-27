// import React, { useEffect } from "react";

// const Modal = ({ isOpen, closeModal }) => {
//   useEffect(() => {
//     // Close modal if clicked outside the modal content
//     const handleClickOutside = (event) => {
//       if (event.target === event.currentTarget) {
//         closeModal(); // Close modal when clicking outside
//       }
//     };

//     // Add event listener to handle outside clicks
//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     // Clean up the event listener when the modal is closed or unmounted
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen, closeModal]);

//   if (!isOpen) return null; // If the modal is not open, don't render it

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-gradient-to-r from-[#6B18A8] via-[#120C61] to-[#B1B9C4] text-white p-8 rounded-lg shadow-xl w-96 max-w-lg">
//         <h3 className="font-bold text-xl mb-4 text-white text-center">Contact Information</h3>
//         <div className="space-y-4">
//           <p className="text-base">Email: 
//             <a 
//               href="mailto:emadyanbu@gmail.com" 
//               className="text-white hover:text-black hover:bg-[#f3f3f3] rounded px-2 transition duration-300">
//               emadyanbu@gmail.com
//             </a>
//           </p>
//           <p className="text-base">Phone 1: 
//             <a 
//               href="tel:+966508315325" 
//               className="text-white hover:text-black hover:bg-[#f3f3f3] rounded px-2 transition duration-300">
//               +966 508315325
//             </a>
//           </p>
//           <p className="text-base">Phone 2: 
//             <a 
//               href="tel:+918861576020" 
//               className="text-white hover:text-black hover:bg-[#f3f3f3] rounded px-2 transition duration-300">
//               +91 8861576020
//             </a>
//           </p>
//         </div>
//         <button 
//           onClick={closeModal} 
//           className="mt-6 w-full py-3 px-6 text-[#850BC3] bg-white rounded-lg shadow-md transform transition duration-300 hover:bg-[#f3f3f3] hover:text-black hover:scale-105">
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Modal;



import React, { useEffect } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Modal = ({ isOpen, closeModal }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target === event.currentTarget) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-black text-white rounded-xl shadow-xl w-11/12 max-w-md p-6">
        
        {/* Header */}

        <h3 className="text-2xl font-bold text-center mb-4">
          CONTACT ME
        </h3>

        {/* Contact Info */}
        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-white" />
            <a
              href="mailto:emadyanbu@gmail.com"
              className="hover:text-blue-400 transition"
            >
              emadyanbu@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-white" />
            <a
              href="tel:+966508315325"
              className="hover:text-blue-400 transition"
            >
              +966 508315325
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-white" />
            <a
              href="tel:+918861576020"
              className="hover:text-blue-400 transition"
            >
              +91 8861576020
            </a>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="mt-6 w-full py-3 text-sm font-medium text-black bg-white rounded-md hover:bg-gray-200 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

