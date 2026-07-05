import { useRef } from "react";
import { motion } from "framer-motion";

/**
 * A card that emits a soft purple "spotlight" glow that follows the cursor,
 * plus a subtle hover lift. Pass layout/content as children.
 */
const SpotlightCard = ({ children, className = "" }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 60 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`group/spot relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-neutral-900/70 hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.3)] ${className}`}
    >
      {/* Cursor-following spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx) var(--my), rgba(139,92,246,0.15), transparent 45%)",
        }}
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </motion.div>
  );
};

export default SpotlightCard;
