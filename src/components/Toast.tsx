
import React, { useEffect } from 'react';
import { X, CheckCircle, ShoppingCart } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'info';
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
      <div className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-afrochic-indigo text-white'
      }`}>
        {type === 'success' ? <CheckCircle className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
        <span className="font-medium">{message}</span>
        <button
          onClick={onClose}
          className="p-1 hover:bg-white/20 rounded-full transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
