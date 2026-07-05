import { motion } from "framer-motion";

/**
 * Left-aligned section header: a numbered mono eyebrow above a large
 * display title. `accent` highlights one word of the title in violet.
 */
const SectionHeader = ({ index, eyebrow, title, accent }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 24 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="mb-14"
    >
      <p className="mb-3 font-mono text-sm tracking-widest text-neutral-500">
        <span className="text-violet-400">{index}</span> / {eyebrow}
      </p>
      <h2 className="text-4xl lg:text-5xl">
        {title}
        {accent && <span className="text-violet-400"> {accent}</span>}
      </h2>
      <div className="mt-5 h-px w-16 bg-violet-500/60" />
    </motion.div>
  );
};

export default SectionHeader;
