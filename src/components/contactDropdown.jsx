import React from "react";

const ContactDropdown = ({ showContact }) => {
  return (
    showContact && (
      <div className="absolute bottom-16 left-0 w-72 bg-[#004D40] text-white border border-[#850BC3] rounded-lg shadow-lg p-4 transform transition-all duration-300 ease-in-out opacity-100 scale-100">
        <h3 className="font-bold text-xl mb-3 text-[#FFD700]">Contact Information</h3>
        <p className="text-base mb-2">Email: 
          <a href="mailto:emadyanbu@gmail.com" className="text-[#FFD700] hover:text-white underline">
            emadyanbu@gmail.com
          </a>
        </p>
        <p className="text-base mb-2">Phone 1: 
          <a href="tel:+966508315325" className="text-[#FFD700] hover:text-white underline">
            +966 508315325
          </a>
        </p>
        <p className="text-base mb-2">Phone 2: 
          <a href="tel:+918861576020" className="text-[#FFD700] hover:text-white underline">
            +91 8861576020
          </a>
        </p>
      </div>
    )
  );
};

export default ContactDropdown;
