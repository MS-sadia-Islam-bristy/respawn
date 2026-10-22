import React from 'react';
import { useCreator } from '../context/CreatorContext';
import { CheckCircle2 } from 'lucide-react';

export const ToastNotification: React.FC = () => {
  const { toastMessage } = useCreator();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-lg bg-[#181818] border border-[#F20D2F]/50 text-white shadow-2xl shadow-black animate-in slide-in-from-bottom-3 duration-200">
      <CheckCircle2 className="w-4 h-4 text-[#F20D2F] shrink-0" />
      <span className="text-xs font-semibold tracking-wide">{toastMessage}</span>
    </div>
  );
};
