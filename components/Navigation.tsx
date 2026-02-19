import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, History, Target, Heart, Box, Phone } from 'lucide-react';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Início', path: '/', icon: Home },
    { name: 'Missão', path: '/missao', icon: Target },
    { name: 'História', path: '/historia', icon: History },
    { name: 'Valores', path: '/valores', icon: Box },
    { name: 'Contactos', path: '/contactos', icon: Phone },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-lg px-4">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="glass-panel rounded-full px-2 py-2 flex justify-between items-center shadow-2xl border border-white/10"
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative px-4 sm:px-5 py-3 rounded-full flex flex-col items-center justify-center group transition-all duration-300"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-blue-600 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              <div className="relative z-10 flex flex-col items-center gap-1">
                <Icon className={`w-5 h-5 transition-colors duration-200 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-400'}`} />
                <span className={`text-[9px] sm:text-[10px] font-medium uppercase tracking-wider transition-colors duration-200 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>
                    {item.name}
                </span>
              </div>
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
};