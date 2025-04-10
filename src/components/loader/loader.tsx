'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '@/app/context/LoadingContext';

export default function Loader() {
  const { isLoading } = useLoading();

  return (
    <AnimatePresence>
        {isLoading && (
            <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="fixed inset-0 z-[9999] bg-[#1e1e1e] flex items-center justify-center"
            >
            <div className="text-center">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#8A2BE2] via-[#00FFFF] to-[#00FF99] bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_20px_#00FFFF]">
                Loading...
                </h1>
                <div className="mt-6 w-24 h-1 bg-gradient-to-r from-[#8A2BE2] via-[#00FFFF] to-[#00FF99] animate-pulse" />
            </div>
            </motion.div>
        )}
    </AnimatePresence>
  );
}
