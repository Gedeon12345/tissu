
import React from 'react';
import { Sparkles } from 'lucide-react';

const NewBadge = () => {
  return (
    <div className="absolute top-2 left-2 bg-gradient-to-r from-afrochic-orange to-afrochic-yellow text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1 animate-pulse">
      <Sparkles className="w-3 h-3" />
      Nouveau
    </div>
  );
};

export default NewBadge;
