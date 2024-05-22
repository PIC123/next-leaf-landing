'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface LeafProps {
  id: string;
  x: number;
  y: number;
  size: number;
  onRemove: (id: string) => void;
}

const Leaf: React.FC<LeafProps> = ({ id, x, y, size, onRemove }) => {
  const leafStyle: React.CSSProperties = {
    position: 'absolute',
    top: y,
    left: x,
    width: `${size}px`,
    height: `${size}px`,
    backgroundImage: 'url(https://clipart-library.com/images_k/leaf-png-transparent/leaf-png-transparent-8.png)', // Ensure you have this image in your public folder
    backgroundSize: 'cover',
    pointerEvents: 'none',
  };

  return (
    <motion.div
      style={leafStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 5 }}
      onAnimationComplete={() => onRemove(id)}
    />
  );
};

export default Leaf;
