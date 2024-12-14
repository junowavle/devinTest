import React from 'react';
import { gradients } from '../../styles/colors';

export const Banner: React.FC = () => {
  return (
    <div
      className="w-full h-screen/2 relative overflow-hidden"
      style={{
        background: gradients.orangeGradient,
        minHeight: '50vh'
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-center p-8">
        <h1 className="text-5xl font-bold text-white">
          Welcome to Pet Community
        </h1>
      </div>
    </div>
  );
};
