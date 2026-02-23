"use client";

import { Heart, MapPin, Clock, Shield, Ear } from "lucide-react";

const features = [
  {
    id: 1,
    icon: MapPin,
    text: "Atendimento Preciso"
  },
  {
    id: 2,
    icon: Clock,
    text: "Horário Flexível"
  },
  {
    id: 3,
    icon: Shield,
    text: "Sigilo Absoluto"
  },
  {
    id: 4,
    icon: Ear,
    text: "Escuta sem Julgamentos"
  }
];

export default function CareFeatures() {
  return (
    <section className="w-full py-8 px-6 md:px-16 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          
          {/* Ícone e Título */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-12 h-12 bg-[#F7D1A5] rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <h2 className="text-3xl md:text-4xl font-[BrandonBold] text-[#5a4a3a]">
              Atendimento Presencial e Online
            </h2>
          </div>

          {/* Grid de Features */}
          <div className="grid md:grid-cols-2 gap-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-[#faf8f5] transition-colors"
                >
                  <div className="w-12 h-12 bg-[#F7D1A5]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#d7a21e]" strokeWidth={2} />
                  </div>
                  <p className="text-sm font-[BrandonBold] text-[#5a4a3a]">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
