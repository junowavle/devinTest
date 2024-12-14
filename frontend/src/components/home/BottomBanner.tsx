import React from 'react';
import { colors } from '../../styles/colors';

export const BottomBanner: React.FC = () => {
  return (
    <div
      className="w-full py-16 bg-gradient-to-r from-orange-500 to-orange-600"
      style={{
        backgroundColor: colors.primary.orange,
      }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white">
          Welcome! This is a community for people who love pets.
        </h2>
      </div>
    </div>
  );
};
