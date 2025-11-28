import { motion, AnimatePresence } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragDirection, setDragDirection] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50;
    
    if (info.offset.x > threshold) {
      // Arrastou para direita - volta
      prevTestimonial();
    } else if (info.offset.x < -threshold) {
      // Arrastou para esquerda - avança
      nextTestimonial();
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-[#171617] text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-sm tracking-[0.3em] uppercase mb-4 text-[#D4A574]"
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
            className="text-xl text-white/70 max-w-2xl mx-auto italic"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A satisfação dos meus clientes é minha maior conquista
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="bg-white/5 p-12 md:p-16 rounded-3xl border border-white/10 relative min-h-[400px] flex flex-col justify-center cursor-grab active:cursor-grabbing"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                whileTap={{ cursor: "grabbing" }}
              >
                {/* Quote Icon */}
                <motion.div
                  className="absolute -top-4 left-8"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <div className="bg-[#D4A574] p-3 border-2 border-white rounded-xl">
                    <Quote className="w-8 h-8" />
                  </div>
                </motion.div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                    >
                      <Star className="w-6 h-6 fill-[#D4A574] text-[#D4A574]" />
                    </motion.div>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-200 mb-8 italic text-xl md:text-2xl text-center leading-relaxed">
                  "{currentTestimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-white/20 pt-6 text-center">
                  <p className="text-xl uppercase tracking-wider mb-2">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-[#D4A574]">
                    {currentTestimonial.event}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-2 border-[#D4A574] flex items-center justify-center hover:bg-[#D4A574] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-[#D4A574] w-8'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-2 border-[#D4A574] flex items-center justify-center hover:bg-[#D4A574] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-xl mb-6 text-gray-200">
            Seja o próximo a ter uma experiência incrível!
          </p>
          <motion.button
            onClick={() => window.open('https://wa.me/5511999999999?text=Olá%20Jéssica!%20Vi%20os%20depoimentos%20e%20quero%20trabalhar%20com%20você.', '_blank')}
            className="bg-[#D4A574] text-white px-8 py-4 rounded-full hover:bg-[#C4956A] transition-colors duration-300 uppercase tracking-wider"
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
