// Context.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { subscribeToKlaviyo } from '@/app/actions/sample';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function fetchAndSubscribeEmail() {
      try {
        // Assuming you have a user's email at hand or fetched from somewhere
        const userEmail = null; // Replace with actual email fetch logic
        const result = await subscribeToKlaviyo({ email: userEmail });
        if (result.success) {
          setEmail(userEmail);
        }
      } catch (error) {
        console.error('Failed to manage subscription:', error);
      }
    }

    fetchAndSubscribeEmail();
  }, []);

  return (
    <UserContext.Provider value={{ email }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
