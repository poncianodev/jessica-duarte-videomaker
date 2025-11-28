import { motion } from "motion/react";
import { ChevronDown, Play } from "lucide-react";
import jessicaImage from "../assets/hero-img.jpg";

export function Hero() {
  const handleCTA = () => {
    window.open(
      "https://wa.me/5511999999999?text=Olá%20Jéssica!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20filmmaking.",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            className="relative order-2 md:order-1 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative max-w-md">
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={jessicaImage}
                  alt="Jéssica Duarte"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                {/* Decorative Border */}
                <div className="absolute inset-0 border-4 border-[#5C4033] rounded-3xl -translate-x-4 translate-y-4 -z-10" />
              </motion.div>

              {/* Decorative Element */}
              <motion.div
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#5C4033] rounded-3xl opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="text-left order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Animated Logo/Name */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-16 h-16 border-2 border-[#5C4033] rounded-2xl flex items-center justify-center"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <Play className="w-8 h-8 fill-[#5C4033]" />
                </motion.div>
                <div className="text-left">
                  <h1 className="text-5xl md:text-7xl uppercase tracking-tight text-[#171617]">
                    Jéssica
                    <br />
                    Duarte
                  </h1>
                </div>
              </div>
              <motion.p
                className="text-xl md:text-2xl tracking-[0.3em] uppercase text-[#5C4033] mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                Filmmaker & Storyteller
              </motion.p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-lg md:text-xl mb-12 text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              Transformando momentos em histórias inesquecíveis através das
              lentes. Com paixão, criatividade e técnica, eternizo seus momentos
              mais especiais com a qualidade cinematográfica que você merece.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <motion.button
                onClick={handleCTA}
                className="bg-[#5C4033] text-white px-8 py-4 rounded-full hover:bg-[#4A3329] transition-colors duration-300 text-lg uppercase tracking-wider"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento
              </motion.button>
              <motion.button
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-[#171617] text-[#171617] px-8 py-4 rounded-full hover:bg-[#171617] hover:text-white transition-all duration-300 text-lg uppercase tracking-wider"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Portfólio
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ChevronDown className="w-8 h-8 text-[#5C4033]" />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border border-[#5C4033] rounded-3xl opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
