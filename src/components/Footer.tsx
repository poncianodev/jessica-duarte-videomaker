import { Play, Instagram, Youtube, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 border-2 border-white flex items-center justify-center">
                <Play className="w-6 h-6 fill-white" />
              </div>
              <div>
                <div className="text-2xl uppercase tracking-tight">Jéssica Duarte</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm uppercase tracking-wider">
              Filmmaker & Storyteller
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="uppercase tracking-wider mb-4">Navegação</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-white transition-colors duration-300"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors duration-300"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                  className="hover:text-white transition-colors duration-300"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="uppercase tracking-wider mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://instagram.com/jessicaduarte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://youtube.com/@jessicaduarte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://facebook.com/jessicaduarte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Jéssica Duarte - Filmmaker. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com paixão para criar histórias inesquecíveis</p>
        </div>
      </div>
    </footer>
  );
}
