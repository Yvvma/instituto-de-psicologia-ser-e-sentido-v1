import { motion } from "framer-motion";
import React from "react";
import { Shield, PiggyBank, Landmark, Car, Users } from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
}

const SERVICE_CARDS: ServiceCard[] = [
  {
    id: "consultoria-seguros",
    title: "Consultoria Seguros Nacionais e Internacionais",
    description: "Proteção abrangente para você e sua família em qualquer lugar do mundo.",
    icon: <Shield size={32} />,
    bgColor: "bg-blue-500"
  },
  {
    id: "planejamento-financeiro",
    title: "Planejamento Financeiro",
    description: "Estratégias personalizadas para alcançar seus objetivos financeiros.",
    icon: <PiggyBank size={32} />,
    bgColor: "bg-green-500"
  },
  {
    id: "blindagem-patrimonial",
    title: "Blindagem Patrimonial",
    description: "Proteja seu patrimônio contra riscos e incertezas com soluções especializadas.",
    icon: <Shield size={32} />,
    bgColor: "bg-purple-500"
  },
  {
    id: "previdencia-privada",
    title: "Previdência Privada",
    description: "Garanta seu futuro com planos de aposentadoria personalizados.",
    icon: <Landmark size={32} />,
    bgColor: "bg-yellow-500"
  },
  {
    id: "consorcios",
    title: "Consórcios",
    description: "Acesso facilitado a bens e serviços através de grupos organizados.",
    icon: <Car size={32} />,
    bgColor: "bg-red-500"
  }
];

const CardsContainer: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white py-12">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12 font-[MMC] text-gray-800">
          Nossos Serviços
        </h2>
        
        <div className="space-y-8">
          {SERVICE_CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              className="bg-white rounded-lg  p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <div className="flex items-start">
                <div className={`text-[#0c3141] w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                  <div className="text-[#0c3141">
                    {card.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-[MMC] font-bold text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 font-[MotoyaCedarW4] tracking-tight">
                    {card.description}
                  </p>
                  
                  <a
                    href={`/seguros/#${card.id}`}
                    className={`border-[#0c3141] border-1 text-[#0c3141]  py-2 px-4  font-medium hover:opacity-90 font-[MMC] transition-opacity inline-block w-full text-center`}
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
              
              {index < SERVICE_CARDS.length - 1 && <hr className="my-6 border-t border-[#0c3141]" />}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;