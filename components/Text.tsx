'use client';
import { motion, transform } from 'framer-motion';

const Text = () => {
  return (
    <div className="text-black">
      <motion.div
        className="bg-[#e73030] w-11 h-11"
        animate={{ rotate: [360, 50, 100, 180, 0] }}
        transition={{ duration: 2 }}
      >
        hello
      </motion.div>
    </div>
  );
};

export default Text;
