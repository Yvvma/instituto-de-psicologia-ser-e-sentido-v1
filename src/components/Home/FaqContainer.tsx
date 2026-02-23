import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Como a psicologia pode ajudar?",
    answer:
      "A psicologia auxilia no autoconhecimento, no manejo das emoções e no desenvolvimento de estratégias para lidar com desafios pessoais, emocionais e relacionais, promovendo mais equilíbrio e qualidade de vida."
  },
  {
    id: "faq-2",
    question: "O que devo esperar da primeira consulta?",
    answer:
      "A primeira consulta é um espaço de acolhimento e escuta. Conversaremos sobre suas demandas, expectativas e objetivos, para que possamos construir juntos o melhor caminho terapêutico."
  },
  {
    id: "faq-3",
    question: "Já tenho um diagnóstico. Qual é o próximo passo?",
    answer:
      "Mesmo com um diagnóstico definido, o acompanhamento psicológico é fundamental. A terapia ajuda a compreender melhor o diagnóstico e a desenvolver estratégias práticas para o dia a dia."
  },
  {
    id: "faq-4",
    question: "Quanto tempo dura o tratamento psicológico?",
    answer:
      "O tempo de tratamento varia conforme as necessidades e objetivos de cada pessoa. Algumas demandas podem ser trabalhadas em menos tempo, enquanto outras exigem um acompanhamento mais contínuo."
  },
  {
    id: "faq-5",
    question: "Posso fazer atendimento online de qualquer lugar?",
    answer:
      "Sim. O atendimento online pode ser realizado de qualquer lugar, com segurança, sigilo e a mesma qualidade do atendimento presencial."
  }
];

const FaqContainer: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="w-full bg-gradient-to-b from-[#faf8f5] to-white py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 font-[BrandonBold] text-[#5a4a3a]">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-[#6a5a4a] font-[BrandonRegular] max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos atendimentos e processos terapêuticos
          </p>
        </div>

        {/* Botão Agendar */}
        <div className="flex justify-center mb-12">
          <a
            href="#contato"
            className="px-8 py-4 bg-[#d7a21e] hover:bg-[#c89219] text-white rounded-full font-[BrandonBold] text-lg transition-all shadow-md hover:shadow-lg"
          >
            Agende Seu Atendimento
          </a>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                className="bg-white border-2 border-[#d7a21e]/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.01 }}
              >
                <button
                  onClick={() =>
                    setOpenId(isOpen ? null : item.id)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#faf8f5] transition-colors"
                >
                  <span className="text-lg md:text-xl font-[BrandonMedium] text-[#5a4a3a] pr-4">
                    {item.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="text-[#d7a21e]" size={24} strokeWidth={3} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.4, ease: "easeInOut" },
                        opacity: { duration: 0.3, ease: "easeOut" }
                      }}
                      className="overflow-hidden bg-[#faf8f5]/50"
                    >
                      <div className="px-6 pb-6 text-[#6a5a4a] leading-relaxed font-[BrandonRegular] text-base md:text-lg">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqContainer;
