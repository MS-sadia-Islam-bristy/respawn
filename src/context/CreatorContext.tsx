import React, { createContext, useContext, useState } from 'react';
import { CreatorConfig } from '../types';
import { INITIAL_CREATOR_CONFIG } from '../config/creatorData';

interface CreatorContextType {
  config: CreatorConfig;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CreatorContext = createContext<CreatorContextType | undefined>(undefined);

export const CreatorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config] = useState<CreatorConfig>(INITIAL_CREATOR_CONFIG);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3000);
  };

  return (
    <CreatorContext.Provider
      value={{
        config,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CreatorContext.Provider>
  );
};

export const useCreator = () => {
  const context = useContext(CreatorContext);
  if (!context) {
    throw new Error('useCreator must be used within a CreatorProvider');
  }
  return context;
};
