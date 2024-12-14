import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { TEST_CONNECTION } from '../graphql/queries';

export const TestConnection: React.FC = () => {
  const { loading, error, data } = useQuery(TEST_CONNECTION);

  useEffect(() => {
    if (loading) {
      console.log('Testing GraphQL connection...');
    }
    if (error) {
      console.error('GraphQL connection error:', error);
    }
    if (data) {
      console.log('GraphQL connection successful:', data);
    }
  }, [loading, error, data]);

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
        <strong className="font-bold">Connection Error: </strong>
        <span className="block sm:inline">{error.message}</span>
      </div>
    );
  }

  return null;
};
