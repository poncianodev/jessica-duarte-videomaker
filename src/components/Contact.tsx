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
              className="text-sm tracking-[0.3em] uppercase mb-4 text-[#5C4033]"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Contato
            </motion.p>
            <motion.h2
              className="text-4xl md:text-6xl mb-4 text-[#171617]"
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
            className="bg-[#171617] text-white p-12 rounded-3xl text-center mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <MessageCircle className="w-16 h-16 mx-auto mb-6 text-[#D4A574]" />
            <h3 className="text-3xl md:text-4xl mb-4 uppercase tracking-wider">
              Fale Comigo no WhatsApp
            </h3>
            <p className="text-gray-200 mb-8 text-lg">
              Respondo rapidamente e estou sempre disponível para tirar suas dúvidas
            </p>
            <motion.button
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá%20Jéssica!%20Vim%20do%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.', '_blank')}
              className="bg-[#5C4033] text-white px-12 py-5 text-lg rounded-full hover:bg-[#4A3329] transition-colors duration-300 uppercase tracking-wider inline-flex items-center gap-3"
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
              href="https://instagram.com/jessica.duartee09"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-300 p-6 rounded-3xl text-center hover:border-[#5C4033] hover:bg-[#5C4033]/5 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <Instagram className="w-8 h-8 mx-auto mb-3 text-[#171617] group-hover:text-[#5C4033] group-hover:scale-110 transition-all duration-300" />
              <h4 className="uppercase tracking-wider mb-2 text-[#171617]">Instagram</h4>
              <p className="text-sm text-gray-600">
                @jessica.duartee09
              </p>
            </motion.a>

            <motion.a
              href="mailto:contato@jessicaduarte.com"
              className="border-2 border-gray-300 p-6 rounded-3xl text-center hover:border-[#5C4033] hover:bg-[#5C4033]/5 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-8 h-8 mx-auto mb-3 text-[#171617] group-hover:text-[#5C4033] group-hover:scale-110 transition-all duration-300" />
              <h4 className="uppercase tracking-wider mb-2 text-[#171617]">E-mail</h4>
              <p className="text-sm text-gray-600">
                contato@jessicaduarte.com
              </p>
            </motion.a>

            <motion.div
              className="border-2 border-gray-300 p-6 rounded-3xl text-center hover:border-[#5C4033] hover:bg-[#5C4033]/5 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-8 h-8 mx-auto mb-3 text-[#171617] group-hover:text-[#5C4033] group-hover:scale-110 transition-all duration-300" />
              <h4 className="uppercase tracking-wider mb-2 text-[#171617]">Localização</h4>
              <p className="text-sm text-gray-600">
                Porto Ferreira, SP
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
