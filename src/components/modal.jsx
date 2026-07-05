import { useEffect } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Modal = ({ isOpen, closeModal }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleKeyDown);
    // lock background scroll while the modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Contact details"
        className="w-11/12 max-w-md rounded-2xl border border-neutral-800 bg-neutral-900/90 p-6 text-white shadow-[0_0_40px_rgba(124,58,237,0.2)]"
      >

        {/* Header */}
        <h3 className="mb-6 text-center font-display text-2xl font-semibold">
          Contact me
        </h3>

        {/* Contact Info */}
        <div className="space-y-4 text-sm">
          <a
            href="mailto:emadyanbu@gmail.com"
            className="flex items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-950/60 p-3 transition hover:border-violet-500/60 hover:text-violet-300"
          >
            <FaEnvelope />
            emadyanbu@gmail.com
          </a>

          <a
            href="tel:+966508315325"
            className="flex items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-950/60 p-3 transition hover:border-violet-500/60 hover:text-violet-300"
          >
            <FaPhone />
            +966 508315325
          </a>

        </div>

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="mt-6 w-full rounded-lg bg-violet-600 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500 active:scale-[0.98]"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

