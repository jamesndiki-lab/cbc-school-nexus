import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const BackHomeButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <Button
        onClick={() => navigate('/')}
        className="bg-black text-white hover:bg-zinc-900 rounded-full px-8 h-12 border border-white/10 shadow-2xl"
      >
        ← Back Home
      </Button>
    </div>
  );
};

export default BackHomeButton;
