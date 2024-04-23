import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

import { subscribeToKlaviyo } from '@/app/actions/subscribe';

interface UserContextType {
  email: string;
  setEmail: (email: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function fetchAndSubscribeEmail() {
      try {
        // Assuming you have a user's email at hand or fetched from somewhere
        const userEmail = null;
        const result = await subscribeToKlaviyo({ email: null });
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
    <UserContext.Provider value={{ email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
