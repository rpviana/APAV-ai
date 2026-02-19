import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mission as MissionComponent } from '../components/Mission';
import { Stats } from '../components/Stats';
import { ShieldAlert, Globe, Users, Heart, Smartphone, UserPlus, X, Info, TrendingUp, MapPin } from 'lucide-react';

const interventions = [
    {
        id: 'domestica',
        title: 'Violência Doméstica',
        icon: ShieldAlert,
        color: 'from-red-500 to-orange-500',
        bg: 'bg-red-500/10',
        border: 'border-red-500/30',
        fact: 'Em 2023, a APAV apoiou mais de 13.000 vítimas de violência doméstica.',
        how: 'A APAV presta apoio emocional, jurídico e social através de uma rede nacional de gabinetes de apoio.',
        impact: 'Presença em 18 distritos e regiões autónomas.'
    },
    {
        id: 'cibercrime',
        title: 'Cibercrime',
        icon: Globe,
        color: 'from-blue-400 to-cyan-500',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        fact: 'A Linha Internet Segura é o pilar da APAV no combate à fraude e assédio online.',
        how: 'A associação presta auxílio na remoção de conteúdos ilegais e no suporte técnico-jurídico para crimes digitais.',
        impact: 'Aumento de 40% nas denúncias de crimes digitais no último ano.'
    },
    {
        id: 'discriminacao',
        title: 'Discriminação',
        icon: Users,
        color: 'from-purple-500 to-indigo-500',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        fact: 'Apoio especializado para vítimas de crimes de ódio e preconceito.',
        how: 'A associação garante a defesa da igualdade e a proteção dos direitos humanos em todas as esferas sociais.',
        impact: 'Programas de sensibilização em mais de 500 empresas e escolas.'
    },
    {
        id: 'idosos',
        title: 'Apoio a Idosos',
        icon: Heart,
        color: 'from-emerald-400 to-teal-600',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/30',
        fact: 'Foco no combate ao isolamento social e abusos financeiros.',
        how: 'Visitas domiciliárias e acompanhamento personalizado para garantir dignidade na terceira idade.',
        impact: 'Mais de 2.000 idosos acompanhados mensalmente.'
    },
    {
        id: 'jovens',
        title: 'Crianças e Jovens',
        icon: Smartphone,
        color: 'from-amber-400 to-orange-600',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/30',
        fact: 'Intervenção precoce é a chave para quebrar ciclos de violência.',
        how: 'Apoio psicológico especializado e prevenção de bullying no contexto escolar.',
        impact: 'Impacto direto em 15.000 alunos através de sessões preventivas.'
    },
    {
        id: 'trafico',
        title: 'Tráfico Humano',
        icon: UserPlus,
        color: 'from-slate-500 to-slate-800',
        bg: 'bg-slate-500/10',
        border: 'border-slate-500/30',
        fact: 'A APAV gere casas de abrigo seguras para vítimas de exploração.',
        how: 'Proteção imediata, reintegração social e apoio legal para sobreviventes de tráfico.',
        impact: 'Cooperação internacional com a Interpol e Europol.'
    }
];

export const Mission: React.FC = () => {
    const [selected, setSelected] = useState<typeof interventions[0] | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 pb-32 min-h-screen selection:bg-purple-500 bg-slate-950"
        >
            <div className="container mx-auto px-6 text-center mb-16 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full -z-10" />
                <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 tracking-tight text-white">
                    Missão & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Impacto</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                    A APAV promove a dignidade e a liberdade, garantindo que o silêncio nunca seja a única opção.
                </p>
            </div>

            <MissionComponent />

            <div className="my-24">
                <Stats />
            </div>

            <div className="container mx-auto px-6 mb-20">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-4xl font-serif font-bold mb-4">Áreas de Intervenção</h2>
                    <div className="h-1 w-20 bg-blue-600 rounded-full" />
                    <p className="text-slate-500 mt-4 text-sm uppercase tracking-widest font-bold">Clique para explorar detalhes</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {interventions.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            onClick={() => setSelected(item)}
                            className={`cursor-pointer p-8 rounded-[2rem] border ${item.border} ${item.bg} backdrop-blur-xl group transition-all relative overflow-hidden`}
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg shadow-black/20`}>
                                <item.icon className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                            <p className="text-slate-400 line-clamp-2 text-sm leading-relaxed mb-4">
                                {item.fact}
                            </p>

                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter text-blue-500 group-hover:gap-4 transition-all">
                                Saiba Mais <Info className="w-3 h-3" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Big Creative Popup / Modal */}
            <AnimatePresence>
                {selected && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelected(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                        />

                        <motion.div
                            layoutId={selected.id}
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 50 }}
                            className="relative w-full max-w-4xl bg-slate-950 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px]"
                        >
                            {/* Modal Header/Visual */}
                            <div className={`w-full md:w-1/3 bg-gradient-to-br ${selected.color} p-12 flex flex-col justify-between relative`}>
                                <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                                <div className="z-10">
                                    <selected.icon className="w-16 h-16 text-white mb-6" />
                                    <h2 className="text-4xl font-serif font-bold text-white leading-tight">
                                        {selected.title}
                                    </h2>
                                </div>
                                <div className="z-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                                    <p className="text-white/80 text-xs font-bold uppercase tracking-widest">Estado da Intervenção</p>
                                    <p className="text-white text-lg font-bold">Ativa Nacionalmente</p>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="flex-1 p-8 md:p-12 overflow-y-auto">
                                <button
                                    onClick={() => setSelected(null)}
                                    className="absolute top-8 right-8 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors group"
                                >
                                    <X className="w-6 h-6 text-slate-400 group-hover:text-white" />
                                </button>

                                <div className="space-y-10">
                                    <section>
                                        <div className="flex items-center gap-3 mb-4">
                                            <TrendingUp className="w-5 h-5 text-blue-500" />
                                            <h4 className="text-xl font-bold text-white">Factos Relevantes</h4>
                                        </div>
                                        <p className="text-slate-300 text-lg leading-relaxed bg-blue-500/5 p-6 rounded-2xl border border-blue-500/10">
                                            {selected.fact}
                                        </p>
                                    </section>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <section>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                                                    <Smartphone className="w-4 h-4 text-indigo-400" />
                                                </div>
                                                <h4 className="font-bold text-white">Como Intervimos</h4>
                                            </div>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                {selected.how}
                                            </p>
                                        </section>

                                        <section>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                                                    <MapPin className="w-4 h-4 text-emerald-400" />
                                                </div>
                                                <h4 className="font-bold text-white">Impacto Territorial</h4>
                                            </div>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                {selected.impact}
                                            </p>
                                        </section>
                                    </div>

                                    <motion.a
                                        href="https://apav.pt/apav_v2/index.php/pt/ajude-a-apav/donativos"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-900/40 mt-4 text-center block"
                                    >
                                        Fazer a Diferença Agora
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};