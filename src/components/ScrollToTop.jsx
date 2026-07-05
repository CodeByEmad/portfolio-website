import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll back to top"
      onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-xl
        border border-neutral-800 bg-neutral-900/80 text-neutral-200 shadow-lg shadow-black/40 backdrop-blur
        transition-all duration-300 hover:border-violet-500/60 hover:text-violet-300 active:scale-95
        ${isVisible ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
