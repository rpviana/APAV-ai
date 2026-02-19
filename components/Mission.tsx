import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Scale, HeartHandshake } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  icon: any;
  index: number;
}

const Card: React.FC<CardProps> = ({ title, description, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3)" }}
      className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group cursor-default"
    >
      <div className="mb-6 p-4 rounded-full bg-blue-500/10 w-fit group-hover:bg-blue-500/20 transition-colors">
        <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-100 font-serif">{title}</h3>
      <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
        {description}
      </p>
    </motion.div>
  );
};

export const Mission: React.FC = () => {
  const items = [
    {
      title: "Apoio à Vítima",
      description: "Serviços gratuitos, confidenciais e qualificados a vítimas de qualquer tipo de crime e violência.",
      icon: HeartHandshake
    },
    {
      title: "Justiça Social",
      description: "Contribuir para o aperfeiçoamento das políticas públicas, sociais e de justiça em Portugal.",
      icon: Scale
    },
    {
      title: "Prevenção",
      description: "Ações de sensibilização para promover uma cultura de não-violência e tolerância nas escolas e comunidades.",
      icon: Shield
    },
    {
      title: "Inclusão",
      description: "Apoio indiscriminado a qualquer cidadão, independentemente da sua origem, género ou credo.",
      icon: Users
    }
  ];

  return (
    <div className="py-24 px-6 container mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white"
        >
          A Missão da APAV
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          className="h-1 w-24 bg-blue-500 mx-auto rounded-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <Card key={idx} {...item} index={idx} />
        ))}
      </div>
    </div>
  );
};