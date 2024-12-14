import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { TEST_CONNECTION } from '../graphql/queries';

export const TestConnection: React.FC = () => {
  const { loading, error, data } = useQuery(TEST_CONNECTION);

  useEffect(() => {
    if (loading) {
      console.log('Testing connection...');
    }
    if (error) {
      console.error('Connection error:', error);
    }
    if (data) {
      console.log('Connection successful:', data);
    }
  }, [loading, error, data]);

  return null;
};
