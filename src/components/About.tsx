import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Camera, Film, Heart } from 'lucide-react';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-sm tracking-[0.3em] uppercase mb-4 text-gray-400"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Sobre mim
            </motion.p>
            
            <motion.h2
              className="text-4xl md:text-6xl mb-6 italic"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Deixe-me te contar uma história...
            </motion.h2>

            <motion.div
              className="space-y-4 text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p>
                Cada projeto é uma nova oportunidade de criar algo único e especial. 
                Com anos de experiência em filmmaking, minha missão é capturar a essência 
                de cada momento e transformá-la em uma narrativa visual emocionante.
              </p>
              <p>
                Seja um casamento, um evento corporativo ou um documentário, meu trabalho 
                é contar sua história da forma mais autêntica e impactante possível.
              </p>
              <p>
                Utilizo equipamentos de última geração e técnicas cinematográficas para 
                garantir que cada frame seja uma obra de arte.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl mb-2">500+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl mb-2">8+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl mb-2">100%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Dedicação</div>
              </div>
            </motion.div>

            {/* Icons */}
            <motion.div
              className="flex gap-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Camera className="w-8 h-8" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Film className="w-8 h-8" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Heart className="w-8 h-8" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607276159787-9ef4db5c0d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBjYW1lcmElMjBmaWxtfGVufDF8fHx8MTc2NDI2MDkxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cinema Equipment"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 border-2 border-white -translate-x-4 translate-y-4 -z-10" />
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-white opacity-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
