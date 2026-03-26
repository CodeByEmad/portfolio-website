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

          {/* <div className="flex items-center gap-3">
            <FaPhone className="text-white" />
            <a
              href="tel:+918861576020"
              className="hover:text-blue-400 transition"
            >
              +91 8861576020
            </a>
          </div> */}
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

