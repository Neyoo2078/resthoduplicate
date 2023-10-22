'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LoadingCounter = () => {
  let [count, setcount] = useState<number>(0);

  useEffect(() => {
    const increment = 1; // Percentage increment
    const interval = setInterval(function () {
      // Update the current percentage
      setcount((count += increment));

      // Check if we've reached 100%
      if (count >= 101) {
        clearInterval(interval); // Stop the interval when we reach 100%
      }
    }, 80);
  }, []);

  return (
    <>
      {' '}
      <AnimatePresence>
        {count < 101 && (
          <motion.div
            key="modal"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: -1000 }}
            transition={{ duration: 3, type: 'tween', delay: 1 }}
            className="bg-black fixed inset-0 flex z-50 items-center justify-center text-white"
          >
            <h1 className="text-[80px] font-bold">{count}%</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LoadingCounter;
