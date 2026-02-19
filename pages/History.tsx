import React from 'react';
import { motion } from 'framer-motion';
import { Timeline } from '../components/Timeline';

export const History: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="pt-24 pb-32 min-h-screen"
        >
            <div className="container mx-auto px-6 mb-16 relative">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />

                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 relative z-10 text-white">
                    O Percurso da <span className="text-blue-500">APAV</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl leading-relaxed relative z-10 font-light">
                    A APAV desempenha um papel fundamental na democracia portuguesa.
                    Desde a sua fundação em 1990, a associação tem traçado um caminho de superação perante os desafios da violência e do crime.
                </p>
            </div>

            <Timeline />

            <div className="container mx-auto px-6 mt-20">
                <div className="glass-panel p-8 rounded-2xl border-l-4 border-blue-500">
                    <h3 className="text-2xl font-serif font-bold mb-4">Ação Contínua</h3>
                    <p className="text-slate-300">
                        Ao longo de mais de 30 anos, a APAV não só apoiou milhares de vítimas, como alterou a mentalidade portuguesa
                        em relação à violência doméstica, que deixou de ser um "assunto privado" para se tornar um crime público prioritário.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};