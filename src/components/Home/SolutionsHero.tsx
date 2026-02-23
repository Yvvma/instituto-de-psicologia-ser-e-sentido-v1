import React from "react";

const AboutInstitute: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[520px] flex items-center bg-white overflow-hidden"
      style={{
        backgroundImage: "url('/photos/office.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 backdrop-blur-xs bg-[#f3ebe5]/60" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto px-6 sm:px-32  py-16">
        <div className=" space-y-6 tracking-base">
          <h2 className="text-4xl md:text-5xl font-[BrandonBold] text-[#5a4a3a]">
            Sobre o Instituto
          </h2>

          <p className="text-sm md:text-xl text-[#5a4a3a] leading-relaxed font-[BrandonRegular]">
            O Instituto de Psicologia Ser e Sentido é um espaço dedicado ao cuidado emocional e ao desenvolvimento humano. 
            Oferecemos atendimento psicológico com acolhimento, ética e respeito à singularidade de cada pessoa.
          </p>

          <p className="text-sm md:text-xl text-[#5a4a3a] leading-relaxed font-[BrandonRegular]">
            Nossas soluções incluem psicoterapia individual para adultos, crianças e adolescentes, avaliação psicológica, 
            orientação parental e atendimento online para brasileiros no exterior. Trabalhamos com abordagens humanizadas 
            que promovem autoconhecimento, bem-estar e transformação.
          </p>

          <div className="pt-4">
            <a 
              href="#contato"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#d7a21e] hover:bg-[#c89219] text-white font-[BrandonBold] transition-all shadow-md hover:shadow-lg"
            >
              Agendar Atendimento
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstitute;
