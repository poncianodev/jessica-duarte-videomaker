import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Camera, Film, Heart } from "lucide-react";
import jessicaAboutImage from "../assets/about-img.jpg";

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-[#171617] text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-sm tracking-[0.3em] uppercase mb-4 text-[#D4A574]"
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
              Cada história merece ser contada de forma única
            </motion.h2>

            <motion.div
              className="space-y-4 text-gray-200 mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p>
                Minha paixão por filmmaking vai além de apenas gravar momentos -
                é sobre capturar emoções, criar narrativas autênticas e
                eternizar memórias que você vai guardar para sempre.
              </p>
              <p>
                Cada projeto recebe minha total atenção e dedicação. Trabalho
                com equipamentos profissionais e técnicas cinematográficas
                modernas para garantir que seu vídeo tenha a qualidade que você
                merece.
              </p>
              <p>
                Não é apenas sobre o resultado final, mas sobre toda a
                experiência. Desde o primeiro contato até a entrega, você terá
                um atendimento personalizado e cuidadoso com cada detalhe.
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
                <div className="text-3xl md:text-4xl mb-2 text-[#D4A574]">
                  100%
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wider">
                  Dedicação
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl mb-2 text-[#D4A574]">
                  4K
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wider">
                  Qualidade
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl mb-2 text-[#D4A574]">
                  24/7
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wider">
                  Suporte
                </div>
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
                className="text-[#D4A574]"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Camera className="w-8 h-8" />
              </motion.div>
              <motion.div
                className="text-[#D4A574]"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Film className="w-8 h-8" />
              </motion.div>
              <motion.div
                className="text-[#D4A574]"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Heart className="w-8 h-8" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative max-w-md">
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={jessicaAboutImage}
                  alt="Jéssica Duarte - Filmmaker"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 border-2 border-[#D4A574] rounded-3xl -translate-x-4 translate-y-4 -z-10" />
              </motion.div>

              {/* Decorative Element */}
              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#D4A574] rounded-3xl opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
