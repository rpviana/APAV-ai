import React from 'react';
import { motion } from 'framer-motion';

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  side: 'left' | 'right';
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ year, title, description, side }) => {
  return (
    <div className={`flex items-center justify-between w-full mb-8 ${side === 'left' ? 'flex-row-reverse' : ''}`}>
      <div className="order-1 w-5/12"></div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-12 h-12 rounded-full justify-center"
      >
        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: side === 'left' ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="order-1 w-5/12 py-4"
      >
        <div className={`bg-slate-800/50 backdrop-blur-md border border-slate-700 p-6 rounded-xl hover:border-blue-500/50 transition-colors ${side === 'left' ? 'text-right' : 'text-left'}`}>
          <span className="font-bold text-4xl text-blue-500/20 absolute top-2 right-4 pointer-events-none select-none">{year}</span>
          <h3 className="mb-2 font-bold text-white text-xl relative z-10">{title}</h3>
          <p className="text-sm leading-snug tracking-wide text-slate-300 relative z-10">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export const Timeline: React.FC = () => {
  const events = [
    {
      year: "1990",
      title: "Fundação",
      description: "A APAV nasce em 25 de Junho, constituindo-se como a primeira instituição em Portugal dedicada exclusivamente ao apoio à vítima."
    },
    {
      year: "1994",
      title: "Linha de Apoio",
      description: "Criação da Linha de Apoio à Vítima, um marco fundamental para o acesso democrático ao apoio jurídico e psicológico."
    },
    {
      year: "2000",
      title: "Rede Nacional",
      description: "Expansão significativa com a abertura de Gabinetes de Apoio à Vítima em diversas cidades, consolidando a presença nacional."
    },
    {
      year: "2013",
      title: "Estatuto de Vítima",
      description: "Forte incidência na advocacia de políticas públicas que culminaram em alterações legislativas protegendo o Estatuto da Vítima."
    },
    {
      year: "2020",
      title: "Pandemia & Inovação",
      description: "Adaptação rápida para manter o apoio durante os confinamentos, reforçando canais digitais perante o aumento da violência doméstica."
    },
    {
      year: "Presente",
      title: "Futuro de Tolerância",
      description: "Continuação da luta pela igualdade, focando na ciberviolência, discriminação e direitos humanos no século XXI."
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-white mb-4">O Percurso da APAV</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Mais de três décadas a construir uma sociedade mais justa e solidária.
          </p>
        </motion.div>

        <div className="relative wrap overflow-hidden p-4 h-full">
          {/* Vertical Line */}
          <div className="absolute border-opacity-20 border-slate-400 h-full border left-1/2 transform -translate-x-1/2"></div>

          {events.map((event, idx) => (
            <TimelineEvent
              key={idx}
              year={event.year}
              title={event.title}
              description={event.description}
              side={idx % 2 === 0 ? 'right' : 'left'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};