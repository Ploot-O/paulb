import React from 'react';
import { useSpring, animated } from 'react-spring';

const HoverGrowText = ({ color, children }) => {
  const [hovered, setHovered] = React.useState(false);

  const springProps = useSpring({
    "fontSize": hovered? '110%' : '100%',
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

const HoverGrowDiv = ({ children, className, style }) => {
  const [hovered, setHovered] = React.useState(false);

  const springProps = useSpring({
    'paddingTop': hovered ? '4vh' : '2vh',
    'paddingBottom': hovered ? '4vh' : '2vh',
  });

  return (
    <animated.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={{
        ...springProps,
        transition: 'transform 0.5s ease',
        ...style,
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