import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { MessageCircle, Instagram, Mail, MapPin } from 'lucide-react';

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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
              Contato
            </motion.p>
            <motion.h2
              className="text-4xl md:text-6xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Vamos Criar Juntos?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Entre em contato e vamos transformar suas ideias em realidade
            </motion.p>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            className="bg-black text-white p-12 text-center mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <MessageCircle className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl mb-4 uppercase tracking-wider">
              Fale Comigo no WhatsApp
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Respondo rapidamente e estou sempre disponível para tirar suas dúvidas
            </p>
            <motion.button
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá%20Jéssica!%20Vim%20do%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.', '_blank')}
              className="bg-white text-black px-12 py-5 text-lg hover:bg-gray-200 transition-colors duration-300 uppercase tracking-wider inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp
            </motion.button>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.a
              href="https://instagram.com/jessicaduarte"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black p-6 text-center hover:bg-black hover:text-white transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <Instagram className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="uppercase tracking-wider mb-2">Instagram</h4>
              <p className="text-sm text-gray-600 group-hover:text-gray-300">
                @jessicaduarte
              </p>
            </motion.a>

            <motion.a
              href="mailto:contato@jessicaduarte.com"
              className="border-2 border-black p-6 text-center hover:bg-black hover:text-white transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="uppercase tracking-wider mb-2">E-mail</h4>
              <p className="text-sm text-gray-600 group-hover:text-gray-300">
                contato@jessicaduarte.com
              </p>
            </motion.a>

            <motion.div
              className="border-2 border-black p-6 text-center hover:bg-black hover:text-white transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="uppercase tracking-wider mb-2">Localização</h4>
              <p className="text-sm text-gray-600 group-hover:text-gray-300">
                São Paulo, SP
              </p>
            </motion.div>
          </motion.div>

          {/* Final Message */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <p className="text-lg text-gray-600 italic">
              Atendo em todo Brasil e também em destinos internacionais
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
