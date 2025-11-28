import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marina & Carlos',
    event: 'Casamento',
    text: 'A Jéssica capturou nosso dia de forma mágica! Cada momento foi eternizado com uma sensibilidade única. O vídeo ficou simplesmente perfeito, emocionante do início ao fim.',
    rating: 5
  },
  {
    name: 'Empresa TechStart',
    event: 'Vídeo Institucional',
    text: 'Profissionalismo impecável! Entregou um material de altíssima qualidade que superou todas as nossas expectativas. Recomendamos para qualquer empresa que busque excelência.',
    rating: 5
  },
  {
    name: 'Ana Paula',
    event: 'Aniversário 15 Anos',
    text: 'Minha festa ficou incrível no vídeo! A Jéssica tem um olhar especial para capturar os melhores momentos. Assisto sempre e me emociono cada vez.',
    rating: 5
  },
  {
    name: 'Rafael Mendes',
    event: 'Documentário',
    text: 'Trabalhar com a Jéssica foi uma experiência única. Ela entendeu perfeitamente a história que queríamos contar e entregou um documentário emocionante e profissional.',
    rating: 5
  }
];

export function Testimonials() {
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
            Depoimentos
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            O Que Dizem Sobre<br/>Meu Trabalho
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto italic"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A satisfação dos meus clientes é minha maior conquista
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-5 p-8 border border-white border-opacity-10 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(255, 255, 255, 0.3)' }}
            >
              {/* Quote Icon */}
              <motion.div
                className="absolute -top-4 left-8"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
              >
                <div className="bg-black p-2 border-2 border-white">
                  <Quote className="w-6 h-6" />
                </div>
              </motion.div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 + i * 0.05, duration: 0.3 }}
                  >
                    <Star className="w-5 h-5 fill-white" />
                  </motion.div>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 mb-6 italic text-lg">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-white border-opacity-20 pt-4">
                <p className="uppercase tracking-wider mb-1">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-400">
                  {testimonial.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-xl mb-6 text-gray-300">
            Seja o próximo a ter uma experiência incrível!
          </p>
          <motion.button
            onClick={() => window.open('https://wa.me/5511999999999?text=Olá%20Jéssica!%20Vi%20os%20depoimentos%20e%20quero%20trabalhar%20com%20você.', '_blank')}
            className="bg-white text-black px-8 py-4 hover:bg-gray-200 transition-colors duration-300 uppercase tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entrar em Contato
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
