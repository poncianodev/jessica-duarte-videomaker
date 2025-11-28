import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    title: 'Chá revelação',
    image: 'https://images.unsplash.com/photo-1730131069753-f7f8ca92ba50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5kZXIlMjByZXZlYWwlMjBwYXJ0eXxlbnwxfHx8fDE3NjQyNjkxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Festa de aniversário',
    image: 'https://images.unsplash.com/photo-1650584997985-e713a869ee77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY0MjczNjc4fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Casamentos',
    image: 'https://images.unsplash.com/photo-1737756512868-c9bba3afba1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmlkZW9ncmFwaHl8ZW58MXx8fHwxNzY0MzEzNzMxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Festa de debutante',
    image: 'https://images.unsplash.com/photo-1763959947405-c1394eda496b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWJ1dGFudGUlMjBwYXJ0eSUyMGRyZXNzfGVufDF8fHx8MTc2NDMxNjQ5MHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Reels',
    image: 'https://images.unsplash.com/photo-1658207951097-96f86cc0a1c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHJlZWxzJTIwdmlkZW98ZW58MXx8fHwxNzY0MzE2NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function Services() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-[#171617]">
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
            Serviços
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            O Que Eu Faço
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto italic"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Especializada em capturar seus momentos mais especiais
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative group cursor-pointer overflow-hidden rounded-3xl h-[400px] md:h-[500px]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -8 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl uppercase tracking-wide text-center">
                  {service.title}
                </h3>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-4 border-[#D4A574] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl m-2" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-xl mb-6 text-gray-200">
            Pronto para transformar sua visão em realidade?
          </p>
          <motion.button
            onClick={() => window.open('https://wa.me/5511999999999?text=Olá%20Jéssica!%20Quero%20conhecer%20seus%20serviços.', '_blank')}
            className="bg-[#D4A574] text-white px-8 py-4 rounded-full hover:bg-[#C4956A] transition-colors duration-300 uppercase tracking-wider"
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
