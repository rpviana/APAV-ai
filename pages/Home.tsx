import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-screen w-full overflow-hidden bg-slate-950"
        >
            {/* Background Image - Full screen from public */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat brightness-[0.3]"
                style={{ backgroundImage: "url('/fundo.jpg')" }}
            />
            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 z-[1] bg-slate-950/60" />

            {/* Content Layer */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="text-blue-400 font-bold tracking-[0.3em] uppercase text-xs mb-6 block border-l-2 border-blue-500 pl-4">
                            Fundada em 1990 — Defesa dos Direitos Humanos
                        </span>
                        <h1 className="text-7xl md:text-9xl font-serif font-bold text-white mb-8 leading-[0.85] tracking-tighter">
                            Quebrar o <br />
                            <span className="relative inline-block">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 animate-gradient-x">
                                    Silêncio
                                </span>
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-12 font-light"
                    >
                        A <strong className="text-white font-semibold">APAV</strong> é uma instituição de solidariedade social que apoia vítimas de crimes.
                        Esta associação existe para garantir que ninguém sofra sozinho.
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="flex flex-wrap gap-6"
                    >
                        <Link to="/missao" className="group relative overflow-hidden flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20">
                            <span className="relative z-10">Conhecer a Missão</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </Link>
                        <Link to="/valores" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-xl group flex items-center gap-2">
                            Explorar Valores
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Persistent Atmosphere Indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-slate-500 animate-bounce group cursor-default">
                <div className="w-px h-12 bg-gradient-to-b from-blue-500/50 to-transparent" />
            </div>
        </motion.div>
    );
};