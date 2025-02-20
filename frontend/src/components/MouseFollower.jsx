import { useState, useEffect } from 'react';

const MouseFollower = ({ src, size }) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPositions((prevPositions) => {
        const newPositions = [...prevPositions, { x: event.clientX - 20, y: event.clientY + 20 }];
        if (newPositions.length > 5) {
          newPositions.shift();
        }
        return newPositions;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {positions.map((position, index) => (
        <img
          key={index}
          src={src}
          className={`absolute ${size}`}
          style={{ 
            top: position.y, 
            left: position.x, 
            transform: 'translate(-50%, -50%) rotate(45deg)', 
            opacity: 1 - (index * 0.2), // Gradual opacity for trailing effect
            zIndex: 1, // Ajuste o z-index para um valor mais baixo
          }}
          aria-hidden="true"
        />
      ))}
    </>
  );
};

export default MouseFollower;