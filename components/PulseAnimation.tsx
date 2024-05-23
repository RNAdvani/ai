// components/PulseAnimation.tsx

import React, { ReactNode } from 'react';
import { Variants, motion } from 'framer-motion';

const PulseAnimation: React.FC<{ duration: number,children:ReactNode }> = ({ duration ,children}) => {
  const pulseVariant = {
    scale: [1, 1.1, 1],
    transition: { duration, repeat: Infinity, repeatType: 'mirror' },
  };

  return (
    <motion.div variants={pulseVariant as any} style={{ display: 'inline-block' }}>
      {children}
    </motion.div>
  );
};

export default PulseAnimation;
