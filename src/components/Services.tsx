import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Video, Sparkles, Scissors, Music, Palette, Zap } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Cobertura Completa',
    description: 'Filmagem profissional do início ao fim do seu evento com equipamentos de última geração'
  },
  {
    icon: Scissors,
    title: 'Edição Profissional',
    description: 'Edição cinematográfica com correção de cor, efeitos e transições suaves'
  },
  {
    icon: Music,
    title: 'Trilha Personalizada',
    description: 'Seleção musical cuidadosa para complementar perfeitamente sua história'
  },
  {
    icon: Sparkles,
    title: 'Efeitos Especiais',
    description: 'Motion graphics e efeitos visuais para dar aquele toque especial'
  },
  {
    icon: Palette,
    title: 'Color Grading',
    description: 'Correção e estilização de cores para criar a atmosfera perfeita'
  },
  {
    icon: Zap,
    title: 'Entrega Rápida',
    description: 'Prazos respeitados e entregas dentro do cronograma acordado'
  }
];

export function Services() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-sm tracking-[0.3em] uppercase mb-4 text-gray-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Serviços
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Um Conjunto Completo<br/>de Soluções
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto italic"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Tudo o que você precisa para ter um vídeo impecável
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              >
                <motion.div
                  className="bg-white bg-opacity-5 p-8 h-full border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-12 h-12" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl mb-4 uppercase tracking-wider">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-xl mb-6 text-gray-300">
            Pronto para transformar sua visão em realidade?
          </p>
          <motion.button
            onClick={() => window.open('https://wa.me/5511999999999?text=Olá%20Jéssica!%20Quero%20conhecer%20seus%20serviços.', '_blank')}
            className="bg-white text-black px-8 py-4 hover:bg-gray-200 transition-colors duration-300 uppercase tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Vamos Conversar
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
