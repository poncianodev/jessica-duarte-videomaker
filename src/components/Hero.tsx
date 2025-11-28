import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronDown, Play } from 'lucide-react';

export function Hero() {
  const handleCTA = () => {
    window.open('https://wa.me/5511999999999?text=Olá%20Jéssica!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20filmmaking.', '_blank');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1586186468323-daf278df1ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtbWFrZXIlMjB3b21hbiUyMGNhbWVyYXxlbnwxfHx8fDE3NjQzMTQ2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Jéssica Duarte Filmmaker"
          className="w-full h-full object-cover opacity-40"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Animated Logo/Name */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <motion.div
                className="w-16 h-16 border-2 border-black flex items-center justify-center"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
              >
                <Play className="w-8 h-8 fill-black" />
              </motion.div>
              <div className="text-left">
                <h1 className="text-5xl md:text-7xl uppercase tracking-tight">
                  Jéssica<br/>Duarte
                </h1>
              </div>
            </div>
            <motion.p 
              className="text-xl md:text-2xl tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Filmmaker & Storyteller
            </motion.p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Transformando momentos em histórias inesquecíveis através das lentes
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.button
              onClick={handleCTA}
              className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors duration-300 text-lg uppercase tracking-wider"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Orçamento
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-black text-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300 text-lg uppercase tracking-wider"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Portfólio
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          <ChevronDown className="w-8 h-8 text-black" />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border border-black opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-black opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
