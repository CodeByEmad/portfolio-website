import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_contact: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_dv2jwwk',       // Replace with your actual service ID
      'template_ms1nv8s',      // Replace with your actual template ID
      formData,
      '3KpsxC5N-D2f9NuCx'           // Replace with your actual public API key
    ).then(
      (result) => {
        console.log('Email successfully sent!');
        alert('Message sent successfully!');
        setFormData({ user_name: '', user_email: '', user_contact: '', message: '' });
      },
      (error) => {
        console.error('Email sending error:', error.text);
        alert('Failed to send message. Please try again later.');
      }
    );
  };

  return (
    <div className="text-white py-20 px-4 flex justify-center items-center min-h-screen">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="bg-white text-black rounded-lg shadow-xl p-12 w-full max-w-6xl min-h-[600px]"
      >
        <div className="flex flex-col lg:flex-row gap-10 ">
          {/* Left Section */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center space-y-2 text-center">
            <h2 className=" text-2xl font-semibold text-black">Let's Connect</h2>

            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-black" />
                <a
                  href="mailto:emadyanbu@gmail.com"
                  className="underline"
                >
                  emadyanbu@gmail.com
                </a>
              </p>
              <p>
                📞 <a href="tel:+966508315325" className="underline">+966 508315325</a>
              </p>
              <p>
                📞 <a href="tel:+918861576020" className="underline">+91 8861576020</a>
              </p>
            </div>
          </div>

          {/* Right Section - Form */}
          <form onSubmit={handleSubmit} className="lg:w-1/2 space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              value={formData.user_name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-gray-300 placeholder-gray-600"
            />
            <input
              type="tel"
              name="user_contact"
              placeholder="Contact Number"
              value={formData.user_contact}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-300 placeholder-gray-600"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-gray-300 placeholder-gray-600"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-gray-300 placeholder-gray-600"
            />
            <button
              type="submit"
              className="bg-black text-white py-2 px-6 rounded-xl hover:bg-gray-800 transition duration-300 w-full"
            >
              Send
            </button>
          </form>
        </div>

        {/* Socials at bottom inside form */}
        <div className="mt-10 text-center">
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/emad-mohammed-habibi-051b28233/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/CodeByEmad"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://x.com/EmadHabibi10"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              <FaSquareXTwitter size={28} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
