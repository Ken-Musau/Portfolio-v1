import { motion } from "framer-motion";

function Test() {
  const variants = {
    visible: {
      opacity: 1,
      x: 100,
      transition: { staggerChildren: 0.2 },
    },
    hidden: { opacity: 0 },
  };

  const items = ["item1", "item2", "item3", "item4", "item5"];
  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item) => (
          <motion.li key={item} variants={variants}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Test;
