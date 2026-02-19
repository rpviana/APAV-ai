import React from 'react';
import { motion } from 'framer-motion';

export const Values: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-24 pb-32 flex flex-col items-center bg-slate-950"
        >
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight text-white">
                            Liberdade & <br />
                            <span className="text-blue-500">Tolerância</span>
                        </h1>

                        <div className="space-y-8">
                            <div className="relative pl-8 border-l-2 border-slate-700 hover:border-blue-500 transition-colors">
                                <h3 className="text-2xl font-bold text-white mb-2">Igualdade</h3>
                                <p className="text-slate-400">
                                    A APAV apoia a igualdade de direitos e oportunidades para todos, independentemente da raça, género, religião ou orientação sexual.
                                </p>
                            </div>

                            <div className="relative pl-8 border-l-2 border-slate-700 hover:border-purple-500 transition-colors">
                                <h3 className="text-2xl font-bold text-white mb-2">Solidariedade</h3>
                                <p className="text-slate-400">
                                    A resposta social da APAV baseia-se na empatia e na ação concreta para restaurar a dignidade de quem sofre.
                                </p>
                            </div>

                            <div className="relative pl-8 border-l-2 border-slate-700 hover:border-emerald-500 transition-colors">
                                <h3 className="text-2xl font-bold text-white mb-2">Confidencialidade</h3>
                                <p className="text-slate-400">
                                    Um espaço seguro onde o silêncio é quebrado sem julgamento e com total proteção da privacidade.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 h-[60vh]">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-blue-600/10 border border-blue-500/20 rounded-3xl p-8 flex flex-col justify-end backdrop-blur-sm relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700" />
                            <span className="text-4xl mb-4 font-serif text-white">01</span>
                            <h4 className="text-xl font-bold text-white">Equidade</h4>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ delay: 0.1 }}
                            className="bg-purple-600/10 border border-purple-500/20 rounded-3xl p-8 flex flex-col justify-end backdrop-blur-sm relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700" />
                            <span className="text-4xl mb-4 font-serif text-white">02</span>
                            <h4 className="text-xl font-bold text-white">Respeito</h4>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ delay: 0.2 }}
                            className="bg-emerald-600/10 border border-emerald-500/20 rounded-3xl p-8 flex flex-col justify-end backdrop-blur-sm relative overflow-hidden group col-span-2"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-700" />
                            <span className="text-4xl mb-4 font-serif text-white">03</span>
                            <h4 className="text-xl font-bold text-white">Segurança & Ética</h4>
                            <p className="text-slate-400 text-sm mt-2 max-w-sm">
                                O sigilo absoluto e a proteção integral de todos os utentes são assegurados.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-20 text-center max-w-2xl mx-auto">
                    <p className="text-lg italic text-slate-400 font-serif">
                        "A tolerância é a única base sólida para uma sociedade livre."
                    </p>
                </div>
            </div>
        </motion.div>
    );
};