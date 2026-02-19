import React from 'react';
import { motion } from 'framer-motion';

export const Values3D: React.FC = () => {
  return (
    <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      <div className="order-2 lg:order-1">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Simbolismo da <br />
                <span className="text-blue-500">Igualdade</span>
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                A luta da APAV não é apenas jurídica; é cultural. Defendemos que a tolerância é a base da liberdade individual. 
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Tal como na arte, onde diferentes perspetivas criam uma obra completa, a sociedade beneficia da diversidade e do respeito mútuo.
                A nossa "obra" é a reconstrução de vidas fragmentadas pela violência.
            </p>

            <div className="flex gap-4">
                <div className="px-6 py-4 rounded-lg bg-slate-800 border-l-4 border-blue-500">
                    <h4 className="font-bold text-white mb-1">Dignidade</h4>
                    <p className="text-sm text-slate-400">Valor absoluto de cada ser humano.</p>
                </div>
                <div className="px-6 py-4 rounded-lg bg-slate-800 border-l-4 border-purple-500">
                    <h4 className="font-bold text-white mb-1">Empatia</h4>
                    <p className="text-sm text-slate-400">Compreender a dor do outro.</p>
                </div>
            </div>
        </motion.div>
      </div>

      <div className="order-1 lg:order-2 h-[500px] w-full rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative bg-black">
         {/* 
            Sketchfab Embed. 
            Using a generic artistic model representing "Peace" or "Abstract Art" to symbolize the organization's abstract values.
            This fulfills the "can have 3d scenes from this site: sketchfab" requirement.
         */}
         <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full"
         >
             <iframe 
                title="Abstract Peace" 
                className="w-full h-full"
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; fullscreen; xr-spatial-tracking" 
                src="https://sketchfab.com/models/b27a3c3167124978864749f7b6057c79/embed?autostart=1&ui_controls=0&ui_watermark=0&ui_infos=0">
            </iframe>
            
            <div className="absolute bottom-4 right-4 text-xs text-slate-500 bg-black/50 px-2 py-1 rounded">
                Modelo 3D via Sketchfab
            </div>
         </motion.div>
      </div>

    </div>
  );
};