import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

                    <div className="max-w-sm">
                        <div className="flex items-center gap-2 mb-6">
                            <Heart className="w-8 h-8 text-blue-600 fill-blue-600" />
                            <span className="text-2xl font-bold font-serif text-white">APAV</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm font-light">
                            Instituição Particular de Solidariedade Social.
                            A APAV trabalha diariamente para promover a proteção e os direitos das vítimas de crime e violência em Portugal.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-white font-bold mb-4">Organização</h4>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre a APAV</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Relatórios</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Imprensa</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Apoio</h4>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Linha de Apoio</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Gabinetes</a></li>
                                <li><a href="#" className="hover:text-blue-400 transition-colors">Direitos</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Contactos</h4>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li>apav.sede@apav.pt</li>
                                <li>116 006 (Linha Gratuita)</li>
                                <li>Lisboa, Portugal</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-600 text-sm">
                        &copy; {new Date().getFullYear()} APAV - Trabalho Académico Demonstrativo.
                    </p>
                    <div className="flex gap-4">
                        <Facebook className="w-5 h-5 text-slate-500 hover:text-blue-500 cursor-pointer transition-colors" />
                        <Twitter className="w-5 h-5 text-slate-500 hover:text-blue-400 cursor-pointer transition-colors" />
                        <Instagram className="w-5 h-5 text-slate-500 hover:text-pink-500 cursor-pointer transition-colors" />
                        <Globe className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>
        </footer>
    );
};