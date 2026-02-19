import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Scale, HeartPulse, ShieldAlert, MessageCircle, Clock } from 'lucide-react';

const ReasonCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ scale: 1.02, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
        className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm cursor-default hover:border-blue-500/50 transition-all group"
    >
        <div className="bg-slate-800 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
            <Icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
);

export const Contact: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 pb-32 min-h-screen"
        >
            <div className="container mx-auto px-6">

                {/* Header Section */}
                <div className="text-center mb-16 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full -z-10" />
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white">
                        Contactos & <span className="text-blue-500">Apoio</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Existem várias formas de contactar a <strong className="text-white">APAV</strong>, seja para pedir ajuda imediata ou obter informações institucionais.
                    </p>
                </div>

                {/* Main Hotline Highlight */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.8 }}
                    className="w-full max-w-4xl mx-auto bg-gradient-to-r from-blue-900/40 to-slate-900/40 border border-blue-500/30 rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden text-center shadow-[0_0_50px_-10px_rgba(37,99,235,0.2)]"
                >
                    <div className="relative z-10">
                        <div className="flex justify-center mb-4">
                            <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
                                Linha de Apoio à Vítima
                            </span>
                        </div>
                        <h2 className="text-6xl md:text-9xl font-mono font-bold tracking-tighter mb-4 drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-400 animate-gradient-x">
                            116 006
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 text-slate-300 font-medium">
                            <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> Chamada Gratuita</span>
                            <span className="flex items-center gap-2"><ShieldAlert className="w-4 h-4" /> Confidencial</span>
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Dias úteis 09h-21h</span>
                        </div>
                    </div>
                </motion.div>

                {/* "Para que contactar?" Grid */}
                <div className="mb-24">
                    <h2 className="text-3xl font-serif font-bold text-center mb-12">Em que podemos ajudar?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ReasonCard
                            delay={0.1}
                            icon={HeartPulse}
                            title="Apoio Emocional"
                            desc="Escuta ativa e suporte psicológico para lidar com o impacto traumático do crime e da violência."
                        />
                        <ReasonCard
                            delay={0.2}
                            icon={Scale}
                            title="Apoio Jurídico"
                            desc="Informação sobre os seus direitos, o funcionamento da justiça penal e acompanhamento de processos."
                        />
                        <ReasonCard
                            delay={0.3}
                            icon={MessageCircle}
                            title="Apoio Social"
                            desc="Encaminhamento para recursos da comunidade e ajuda na reorganização da vida após o crime."
                        />
                        <ReasonCard
                            delay={0.4}
                            icon={ShieldAlert}
                            title="Segurança"
                            desc="Avaliação de risco e elaboração de planos de segurança personalizados para a sua proteção."
                        />
                    </div>
                </div>

                {/* Secondary Contacts & Map */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* Contacts Info */}
                    <div className="space-y-8">
                        <div className="bg-slate-900/80 border border-white/5 p-8 rounded-2xl backdrop-blur-md">
                            <h3 className="text-2xl font-serif font-bold mb-6 text-white flex items-center gap-3">
                                <Mail className="w-6 h-6 text-blue-500" />
                                Sede Administrativa
                            </h3>
                            <div className="space-y-6 text-slate-300">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 mt-1 text-slate-500" />
                                    <div>
                                        <strong className="block text-white">Morada</strong>
                                        <p>Rua José Estêvão, 135 A</p>
                                        <p>1150-201 Lisboa, Portugal</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="w-5 h-5 mt-1 text-slate-500" />
                                    <div>
                                        <strong className="block text-white">Telefone Sede</strong>
                                        <p className="hover:text-blue-400 transition-colors">+351 21 358 7900</p>
                                        <span className="text-xs text-slate-500">(Chamada para a rede fixa nacional)</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="w-5 h-5 mt-1 text-slate-500" />
                                    <div>
                                        <strong className="block text-white">Email Geral</strong>
                                        <p className="hover:text-blue-400 transition-colors cursor-pointer">apav.sede@apav.pt</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-white/5">
                            <h4 className="font-bold text-white mb-2">Para Imprensa</h4>
                            <p className="text-slate-400 text-sm mb-4">Questões relacionadas com media e comunicação.</p>
                            <a href="mailto:comunicacao@apav.pt" className="text-blue-400 hover:text-blue-300 text-sm font-bold flex items-center gap-2">
                                <Mail className="w-4 h-4" /> comunicacao@apav.pt
                            </a>
                        </div>
                    </div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="h-full min-h-[400px] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative bg-slate-800"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.123847867355!2d-9.13963482356565!3d38.728842457418725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19339a1d37b60b%3A0x62956c3989c9d472!2sAPAV%20-%20Associa%C3%A7%C3%A3o%20Portuguesa%20de%20Apoio%20%C3%A0%20V%C3%ADtima!5e0!3m2!1spt-PT!2spt!4v1709224401563!5m2!1spt-PT!2spt"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa Sede APAV"
                        ></iframe>

                        <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur px-4 py-2 rounded-lg border border-white/10 text-xs text-white shadow-lg pointer-events-none">
                            <span className="font-bold text-blue-400">Sede</span> • Lisboa
                        </div>
                    </motion.div>
                </div>

            </div>
        </motion.div>
    );
};