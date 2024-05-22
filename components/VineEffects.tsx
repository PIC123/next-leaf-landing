'use client';

import React, { useState } from 'react';
import Vine from './Vine';

interface Segment {
  x: number;
  y: number;
}

const VineEffect: React.FC = () => {
  const [segments, setSegments] = useState<Segment[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setSegments((segments) => [...segments, { x: clientX, y: clientY }]);
  };

  return (
    <div
      onClick={handleClick}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <Vine segments={segments} />
    </div>
  );
};

export default VineEffect;
