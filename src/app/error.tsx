'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ErrorProps {
  error: string | Error | null;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen  text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: show ? 1 : 0, y: show ? 0 : -20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="p-8 bg-gray-800 rounded-xl shadow-lg text-center max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-4">Something went wrong!</h1>
        <p className="mb-6">{typeof error === 'string' ? error : error?.message}</p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold"
        >
          Try Again
        </button>
      </motion.div>
    </div>
  );
}
