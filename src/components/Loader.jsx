import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-darkBg z-50 flex flex-col items-center justify-center">
      {/* Animated Logo */}
      <div className="mb-8 relative">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white font-bold text-4xl shadow-2xl shadow-primary/50 animate-pulse">
          KD
        </div>
        <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent blur-xl opacity-50 animate-ping"></div>
      </div>

      {/* Loading Text */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold gradient-text mb-2">Welcome</h2>
        <p className="text-textSecondary text-sm">Crafting the experience...</p>
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-cardBg rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress Percentage */}
      <p className="mt-4 text-textSecondary">{progress}%</p>
    </div>
  );
};

export default Loader;
