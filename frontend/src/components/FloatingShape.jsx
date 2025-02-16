import { motion } from 'framer-motion';

const FloatingShape = ({ src, size, top, left, delay, initialRotate }) => {
  return (
    <motion.img
      src={src}
      className={`absolute ${size} opacity-30`}
      style={{ top, left }}
      animate={{ 
        y: [0, 20, 0],
        x: [0, 20, 0],
        rotate: [initialRotate, initialRotate + 360],
      }}
      transition={{
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        delay,
      }}
      aria-hidden="true"
    />
  );
};

export default FloatingShape;