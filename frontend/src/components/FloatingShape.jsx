import { motion } from 'framer-motion';

const FloatingShape = ({ src, size, top, left, delay }) => {
  return (
    <motion.img
      src={src}
      className={`absolute ${size} opacity-20`}
      style={{ top, left }}
      animate={{ 
        y: ["0%", "100%", "0%"],
        x: ["0%", "100%", "0%"],
        rotate: [0, 360],    
      }}
      transition={{
        duration: 20,
        ease: "linear",
        loop: Infinity,
        delay,
      }}
      aria-hidden="true"
    />
  );
};

export default FloatingShape;