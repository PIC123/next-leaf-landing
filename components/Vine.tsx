'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Leaf from './Leaf';

interface Segment {
  x: number;
  y: number;
}

interface VineProps {
  segments: Segment[];
}

const Vine: React.FC<VineProps> = ({ segments }) => {
  const [leaves, setLeaves] = useState<{ id: string; x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    if (segments.length > 0) {
      const lastSegment = segments[segments.length - 1];
      const leafId = `${Date.now()}-leaf`;
      setLeaves((leaves) => [
        ...leaves,
        {
          id: leafId,
          x: lastSegment.x,
          y: lastSegment.y,
          size: Math.random() * 20 + 20, // Random size between 20 and 40
        },
      ]);

      const timeout = setTimeout(() => {
        setLeaves((leaves) => leaves.filter((leaf) => leaf.id !== leafId));
      }, 5000); // Remove leaf after 5 seconds (matching transition duration)

      return () => clearTimeout(timeout);
    }
  }, [segments]);

  const vinePath = segments.map((segment, index) =>
    index === 0 ? `M${segment.x},${segment.y}` : `L${segment.x},${segment.y}`
  ).join(' ');

  if (segments.length === 0) {
    return null; // Return null if there are no segments to render
  }

  return (
    <>
      <motion.svg
        style={{ position: 'absolute', pointerEvents: 'none' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <motion.path
          d={vinePath}
          fill="transparent"
          stroke="green"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5 }}
        />
      </motion.svg>
      <AnimatePresence>
        {leaves.map((leaf) => (
          <Leaf key={leaf.id} id={leaf.id} x={leaf.x} y={leaf.y} size={leaf.size} onRemove={(id) => setLeaves((leaves) => leaves.filter((leaf) => leaf.id !== id))} />
        ))}
      </AnimatePresence>
    </>
  );
};

export default Vine;
