import React from 'react';
import { useSpring, animated } from 'react-spring';

const HoverGrowText = ({ color, children }) => {
  const [hovered, setHovered] = React.useState(false);

  const springProps = useSpring({
    "font-size": hovered? '120%' : '100%',
    //transform: hovered ? 'scale(1.1)' : 'scale(1)',
    color: hovered? color : '#1e40af',
  });

  return (
    <animated.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...springProps,
        display: 'inline-block',
        transition: 'transform 0.5s ease',
      }}
    >
      {children}
    </animated.div>
  );
};

const HoverGrowDiv = ({ children }) => {
  const [hovered, setHovered] = React.useState(false);

  const springProps = useSpring({
    transform: hovered ? 'scale(1, 1.20)' : 'scale(1, 1)',
  });

  return (
    <animated.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...springProps,
        transition: 'transform 0.5s ease',
      }}
    >
      {children}
    </animated.div>
  );
};

export {
  HoverGrowText,
  HoverGrowDiv,
}