import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: '1.500',
    description: 'Ideal para eventos menores e conteúdo simples',
    features: [
      'Cobertura de até 4 horas',
      'Vídeo final editado (3-5 min)',
      'Correção de cor básica',
      'Trilha sonora inclusa',
      '1 cinegrafista',
      'Entrega em 15 dias'
    ],
    highlight: false
  },
  {
    name: 'Premium',
    price: '3.500',
    description: 'O pacote mais popular para casamentos e eventos',
    features: [
      'Cobertura de até 8 horas',
      'Vídeo final editado (8-12 min)',
      'Color grading profissional',
      'Trilha personalizada',
      '2 cinegrafistas',
      'Drone (imagens aéreas)',
      'Teaser rápido (1 min)',
      'Entrega em 30 dias'
    ],
    highlight: true
  },
  {
    name: 'Gold',
    price: '6.500',
    description: 'Experiência completa e cinematográfica',
    features: [
      'Cobertura ilimitada',
      'Vídeo final editado (15-20 min)',
      'Color grading cinematográfico',
      'Trilha exclusiva',
      '3 cinegrafistas',
      'Drone com piloto dedicado',
      'Making of completo',
      'Teaser + trailer',
      'Álbum digital de fotos',
      'Entrega prioritária em 20 dias'
    ],
    highlight: false
  }
];

export function Pricing() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const handleContact = (planName: string) => {
    window.open(
      `https://wa.me/5511999999999?text=Olá%20Jéssica!%20Tenho%20interesse%20no%20pacote%20${planName}.`,
      '_blank'
    );
  };

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white">
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
            Investimentos
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Planos Personalizados
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Escolha o pacote que melhor se adequa ao seu projeto
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative ${plan.highlight ? 'md:-mt-4 md:mb-4' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 text-sm uppercase tracking-wider z-10">
                  Mais Popular
                </div>
              )}
              <motion.div
                className={`h-full border-2 p-8 ${
                  plan.highlight
                    ? 'border-black bg-gray-50'
                    : 'border-gray-300 bg-white'
                }`}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl uppercase tracking-wider mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6 min-h-[48px]">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-sm">a partir de</span>
                  <div className="flex items-start">
                    <span className="text-2xl mr-1">R$</span>
                    <span className="text-5xl md:text-6xl">{plan.price}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7 + featureIndex * 0.05, duration: 0.4 }}
                    >
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  onClick={() => handleContact(plan.name)}
                  className={`w-full py-4 uppercase tracking-wider transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'border-2 border-black text-black hover:bg-black hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Solicitar Orçamento
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Payment Info */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="bg-gray-100 p-8 border-2 border-gray-300">
            <h3 className="text-2xl uppercase tracking-wider mb-4">Condições de Pagamento</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 50% na confirmação do serviço</li>
              <li>• 50% na entrega do material final</li>
              <li>• Parcelamento em até 3x sem juros</li>
              <li>• Aceitamos PIX, transferência e cartão</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-8 border-2 border-gray-300">
            <h3 className="text-2xl uppercase tracking-wider mb-4">Observações</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Valores podem variar conforme localização</li>
              <li>• Orçamentos personalizados disponíveis</li>
              <li>• Consulte condições especiais para múltiplos eventos</li>
              <li>• Taxa de deslocamento pode ser aplicada</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
