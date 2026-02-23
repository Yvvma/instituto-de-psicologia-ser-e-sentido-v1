"use client";

const situations = [
  {
    id: 1,
    title: "Ansiedade e Estresse",
    text: "Sente que a mente não para? Preocupações constantes, dificuldade para relaxar ou sintomas físicos como coração acelerado podem ser sinais de que você precisa de apoio."
  },
  {
    id: 2,
    title: "Relacionamentos Difíceis",
    text: "Conflitos familiares, dificuldades no trabalho ou relacionamentos que causam sofrimento? A terapia pode ajudar a compreender padrões e construir vínculos mais saudáveis."
  },
  {
    id: 3,
    title: "Autoconhecimento e Crescimento",
    text: "Busca entender melhor suas emoções, desenvolver seu potencial ou encontrar mais sentido na vida? A psicoterapia é um caminho de transformação pessoal."
  }
];

export default function WelcomeSituations() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-[BrandonBold] text-[#5a4a3a] text-center mb-12">
          Você reconhece alguma destas situações?
        </h2>

        {/* Cards - Grid no desktop, scroll no mobile */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {situations.map((situation) => (
            <div
              key={situation.id}
              className="flex-shrink-0 w-[85vw] md:w-auto snap-center bg-gradient-to-br from-[#faf8f5] to-[#f0ebe5] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
            >
              {/* Ícone no topo esquerdo */}
              <img
                src="/logo/favicon-instituto.png"
                alt="Instituto"
                className="w-8 h-8 mb-4"
              />

              {/* Título */}
              <h3 className="text-xl font-[BrandonBold] text-[#5a4a3a] mb-3">
                {situation.title}
              </h3>

              {/* Texto */}
              <p className="text-[#6a5a4a] font-[BrandonRegular] leading-relaxed text-sm">
                {situation.text}
              </p>
            </div>
          ))}
        </div>

        {/* Botão Agendar */}
        <div className="flex justify-center mt-12">
          <a
            href="#contato"
            className="px-8 py-4 bg-[#d7a21e] hover:bg-[#c89219] text-white rounded-full font-[BrandonBold] text-lg transition-all shadow-md hover:shadow-lg"
          >
            Agendar Atendimento
          </a>
        </div>
      </div>
    </section>
  );
}
