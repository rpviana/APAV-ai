import React from 'react';
import { motion } from 'framer-motion';

const StatItem = ({ number, label }: { number: string; label: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center p-6 border border-white/5 bg-white/5 rounded-2xl backdrop-blur-sm"
  >
    <div className="text-4xl md:text-6xl font-bold text-blue-400 mb-2 font-serif">{number}</div>
    <div className="text-slate-300 font-medium tracking-wide uppercase text-sm">{label}</div>
  </motion.div>
);

export const Stats: React.FC = () => {
  return (
    <div className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatItem number="+12.000" label="Processos de Apoio Anuais" />
            <StatItem number="30+" label="Anos de História" />
            <StatItem number="19" label="Gabinetes de Apoio" />
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
        >
            <p className="text-xl text-slate-300 italic font-serif">
                "Não nos focamos apenas nos números, mas em cada vida que estes representam."
            </p>
        </motion.div>
      </div>
    </div>
  );
};