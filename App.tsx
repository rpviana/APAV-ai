import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

// Page Imports
import { Home } from './pages/Home';
import { Mission } from './pages/Mission';
import { History } from './pages/History';
import { Values } from './pages/Values';
import { Contact } from './pages/Contact';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/missao" element={<Mission />} />
        <Route path="/historia" element={<History />} />
        <Route path="/valores" element={<Values />} />
        <Route path="/contactos" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden selection:bg-blue-500 selection:text-white">

        <AnimatePresence>
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.8 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            >
              <div className="text-center">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-1 bg-blue-600 mb-4"
                />
                <motion.h1
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-6xl font-serif font-bold text-white tracking-widest"
                >
                  APAV
                </motion.h1>
                <p className="text-blue-500 text-xs tracking-[0.5em] mt-2 uppercase">Apoio à Vítima</p>
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-grow relative">
                <AnimatedRoutes />
              </main>
              <Footer />
            </div>
          )}
        </AnimatePresence>

        {/* Persistent Background Atmosphere */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/5 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-900/5 blur-[120px] rounded-full mix-blend-screen" />
        </div>
      </div>
    </Router>
  );
}