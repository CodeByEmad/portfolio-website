import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_contact: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [honeypot, setHoneypot] = useState(''); // bots fill this; humans never see it
  const isSending = status.type === 'sending';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Silently drop submissions that fill the hidden honeypot field.
    if (honeypot) {
      setStatus({ type: 'success', message: "Thanks! Your message has been sent — I'll get back to you soon." });
      return;
    }

    setStatus({ type: 'sending', message: '' });

    emailjs.send(
      'service_dv2jwwk',       // service ID
      'template_ms1nv8s',      //  template ID
      formData,
      '3KpsxC5N-D2f9NuCx'           //  public API key
    ).then(
      () => {
        setStatus({ type: 'success', message: "Thanks! Your message has been sent — I'll get back to you soon." });
        setFormData({ user_name: '', user_email: '', user_contact: '', message: '' });
      },
      (error) => {
        console.error('Email sending error:', error?.text);
        setStatus({ type: 'error', message: 'Something went wrong. Please try again or email me directly.' });
      }
    );
  };

  const inputClass =
    "w-full rounded-lg border border-neutral-800 bg-neutral-950/60 p-3 text-white placeholder-neutral-500 transition focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-600/30";

  return (
    <div className="flex flex-col py-10 text-white">
      <SectionHeader index="06" eyebrow="contact" title="Get in" accent="touch" />

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 shadow-[0_0_40px_rgba(124,58,237,0.1)] backdrop-blur-sm sm:p-10 md:p-12"
      >
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Left: contact details */}
          <div className="flex flex-col justify-center space-y-6 lg:w-1/2">
            <div>
              <h3 className="text-2xl font-semibold text-white">Let&apos;s build something great</h3>
              <p className="mt-2 text-neutral-400">
                Have a project in mind or just want to say hi? Drop a message and I&apos;ll
                get back to you.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:emadyanbu@gmail.com"
                className="flex items-center gap-3 text-neutral-300 transition hover:text-violet-400"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-950/60">
                  <FaEnvelope />
                </span>
                emadyanbu@gmail.com
              </a>
              <a
                href="tel:+966508315325"
                className="flex items-center gap-3 text-neutral-300 transition hover:text-violet-400"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-950/60">
                  <FaPhone />
                </span>
                +966 508315325
              </a>
            </div>

            {/* Socials */}
            <div className="flex space-x-5 pt-2">
              <a href="https://www.linkedin.com/in/emad-mohammed-habibi-051b28233/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:text-violet-400">
                <FaLinkedin size={26} />
              </a>
              <a href="https://github.com/CodeByEmad" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:text-violet-400">
                <FaGithub size={26} />
              </a>
              <a href="https://x.com/EmadHabibi10" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:text-violet-400">
                <FaSquareXTwitter size={26} />
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="space-y-4 lg:w-1/2">
            {/* Honeypot — hidden from users, catches spam bots */}
            <input
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />
            <div>
              <label htmlFor="user_name" className="sr-only">Name</label>
              <input id="user_name" type="text" name="user_name" placeholder="Name" value={formData.user_name} onChange={handleChange} required className={inputClass} />
            </div>
            <div>
              <label htmlFor="user_contact" className="sr-only">Contact Number</label>
              <input id="user_contact" type="tel" name="user_contact" placeholder="Contact Number" value={formData.user_contact} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="user_email" className="sr-only">Email</label>
              <input id="user_email" type="email" name="user_email" placeholder="Email" value={formData.user_email} onChange={handleChange} required className={inputClass} />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Message" value={formData.message} onChange={handleChange} required className={inputClass} />
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="shine relative w-full overflow-hidden rounded-lg bg-violet-600 py-3 font-semibold text-white shadow-lg shadow-violet-950/50 transition-all duration-300 hover:bg-violet-500 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? 'Sending…' : 'Send Message'}
            </button>

            {/* Inline status feedback */}
            {status.type === 'success' && (
              <p role="status" className="text-center text-sm text-green-400">{status.message}</p>
            )}
            {status.type === 'error' && (
              <p role="alert" className="text-center text-sm text-red-400">{status.message}</p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
