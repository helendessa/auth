import { useState, useEffect } from 'react';

const MouseFollower = ({ src, size }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <img
      src={src}
      className={`absolute ${size} opacity-80`}
      style={{ top: mousePosition.y, left: mousePosition.x, transform: 'translate(-50%, -50%) rotate(45deg)' }}
      aria-hidden="true"
    />
  );
};

export default MouseFollower;