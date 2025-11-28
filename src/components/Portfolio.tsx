import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play } from 'lucide-react';

const categories = [
  {
    title: 'Casamentos',
    image: 'https://images.unsplash.com/photo-1737756512868-c9bba3afba1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmlkZW9ncmFwaHl8ZW58MXx8fHwxNzY0MzEzNzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Eternizando o dia mais especial'
  },
  {
    title: 'Corporativo',
    image: 'https://images.unsplash.com/photo-1654723011662-e9be9ab3fe84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB2aWRlbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzY0MjMyMzY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Conteúdo profissional para sua empresa'
  },
  {
    title: 'Documentário',
    image: 'https://images.unsplash.com/photo-1612872750175-5b67ab0a6011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMGZpbG1pbmd8ZW58MXx8fHwxNzY0MjMwMDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Histórias reais que precisam ser contadas'
  },
  {
    title: 'Eventos',
    image: 'https://images.unsplash.com/photo-1763280290224-1b7ed510a31e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHZpZGVvZ3JhcGh5fGVufDF8fHx8MTc2NDMxNDYyOXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Capturando cada momento especial'
  },
  {
    title: 'Comerciais',
    image: 'https://images.unsplash.com/photo-1586186468323-daf278df1ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtbWFrZXIlMjB3b21hbiUyMGNhbWVyYXxlbnwxfHx8fDE3NjQzMTQ2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Vídeos que vendem sua marca'
  }
];

export function Portfolio() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="portfolio" ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-sm tracking-[0.3em] uppercase mb-4 text-gray-500"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Portfolio
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Meus Trabalhos
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto italic"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Cada projeto é uma história única, contada com paixão e técnica
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="relative group cursor-pointer overflow-hidden bg-black"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <motion.div
                className="relative h-96 overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <ImageWithFallback
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-opacity duration-500"
                />
              </motion.div>

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                <motion.div
                  className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                    <Play className="w-6 h-6 fill-white" />
                  </div>
                </motion.div>
                <h3 className="text-2xl md:text-3xl mb-2 uppercase tracking-wider">
                  {category.title}
                </h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {category.description}
                </p>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 border-4 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-4" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            onClick={() => window.open('https://wa.me/5511999999999?text=Olá%20Jéssica!%20Gostaria%20de%20ver%20mais%20do%20seu%20portfólio.', '_blank')}
            className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors duration-300 uppercase tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Mais Projetos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
