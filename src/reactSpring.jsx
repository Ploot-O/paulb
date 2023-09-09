import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ExpandingDiv = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Define the styles for the animated div
  const divAnimation = useSpring({
    height: isHovered ? '125%' : '100%', // 125% for expansion
  });

  return (
    <div
      className="expanding-div"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <animated.div className="content" style={divAnimation}>
        Hover me!
      </animated.div>
    </div>
  );
};

export default ExpandingDiv;
