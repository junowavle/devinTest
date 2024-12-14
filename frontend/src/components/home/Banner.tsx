import React from 'react';
import { gradients } from '../../styles/colors';

export const Banner: React.FC = () => {
  return (
    <div
      className="w-full relative overflow-hidden transition-all duration-300"
      style={{
        background: gradients.orangeGradient,
        height: 'calc(100vh - 64px)',
        maxHeight: '960px'
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-center p-8">
        <div className="space-y-6 max-w-[1920px] mx-auto px-8">
          <h1 className="text-7xl font-bold text-white tracking-tight">
            Welcome to Pet Community
          </h1>
          <p className="text-2xl text-white/90 font-medium max-w-2xl mx-auto">
            A place where pet lovers come together to share their stories
          </p>
        </div>
      </div>
    </div>
  );
};
