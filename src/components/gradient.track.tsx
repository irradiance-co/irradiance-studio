import React, { ReactNode, useEffect, useState, FC } from 'react';

// Custom hook to track mouse position
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

interface GradientDivProps {
  children: ReactNode;
  className: string;
}

// Component to display a gradient background that follows the mouse
export const GradientDiv: FC<GradientDivProps> = ({ children, className }) => {
  const { x, y } = useMousePosition();

  return (
    <div
      style={{
        backgroundImage: `radial-gradient(circle at ${x}px ${y}px, red, white 50%)`,
      }}
      className={className}>
      {children}
    </div>
  );
};
