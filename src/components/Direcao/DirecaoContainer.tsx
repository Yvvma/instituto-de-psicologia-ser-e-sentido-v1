import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Youtube } from "lucide-react";

const DirecaoContainer = () => {
  const { t } = useTranslation();

  const projects = [
    {
      artist: t("projects.works.ster.title"),
      title: t("projects.works.ster.person"),
      video: "/direcao/ster-danca-de-baile.mp4",
      description: t("projects.works.ster.desc"),
      director: t("projects.works.ster.director"),
      youtube: "https://youtu.be/Yv4ckZZYgtY?si=fqyQnruyDsYm0WvG"
    },
    {
      artist: t("projects.works.mercado_livre.title"),
      title: t("projects.works.mercado_livre.person"),
      video: '/direcao/mercado-livre-natasha-sousa_yw4hym.mp4',
      description: t("projects.works.mercado_livre.desc"),
      director: t("projects.works.mercado_livre.director"),
      youtube: "https://youtu.be/98H2bsGUumQ?feature=shared"
    },
    {
      artist: t("projects.works.lou_sinais.title"),
      title: t("projects.works.lou_sinais.person"),
      video: "/direcao/sinais-lou-garcia_ppwr3j.mp4",
      description: t("projects.works.lou_sinais.desc"),
      director: t("projects.works.lou_sinais.director"),
      youtube: "https://youtu.be/pH5YCDKmF_s?feature=shared"
    },
    {
      artist: t("projects.works.lou_sexta.title"),
      title: t("projects.works.lou_sexta.person"),
      video: "direcao/lou-garcia-sexta-feira_yff1sh.mp4",
      description: t("projects.works.lou_sexta.desc"),
      director: t("projects.works.lou_sexta.director"),
      youtube: "https://www.youtube.com/watch?v=zP37IJ1wARo"
    },
    {
      artist: t("projects.works.lacoste.title"),
      title: t("projects.works.lacoste.person"),
      video: "/direcao/crocday-lacoste-natasha-sousa_qxrjrs.mp4",
      description: t("projects.works.lacoste.desc"),
      director: t("projects.works.lacoste.director"),
      youtube: "https://www.youtube.com/watch?v=D35n2voWdn8"
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full bg-[#111111] pb-8">
      <div className="flex flex-col items-center gap-2 max-w-max py-8 ">
        
        <p className="text-white font-[AppliedBold] shadow-sm tracking-tight text-center text-2xl  uppercase leading-5 sm:leading-6 z-20 whitespace-pre-line  px-1  pb-1">
          {t("projects.title")}
        </p>

        {/* Animated line */}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0.9 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="block h-[2px] w-full bg-white origin-center"
        />
      </div>
                    
      <p className=" relative shadow-sm text-white font-[AppliedRegular] tracking-tight max-w-4xl text-left text-base sm:text-lg leading-6 sm:leading-6 z-20 whitespace-pre-line px-8 pb-8">
        {t('projects.text')}
      </p>
      

      <div className="flex flex-col w-full gap-12">
        {projects.map((p, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={idx}
              className="grid grid-cols-3 gap-4 px-4 items-center lg:px-12"
            >
              {/* Texto Principal */}
              <motion.div
                className={`text-white flex flex-col justify-center ${
                  isEven 
                    ? "order-1 text-right items-end" 
                    : "order-3 text-left items-start"
                }`}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-sm sm:text-lg font-[AppliedMedium] tracking-tight">
                  {p.artist}
                </p>
                <h3 className="text-md sm:text-3xl font-[AppliedBold] tracking-tight mt-1">
                  {p.title}
                </h3>
              </motion.div>

              {/* Vídeo sempre no centro */}
              <div className="flex justify-center order-2">
                <video
                  src={p.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full max-w-sm aspect-[9/16] sm:aspect-[3/4] object-cover rounded-xl shadow-xl border border-white/20"
                />
              </div>

              {/* Descrição + Diretor + Botão */}
              <motion.div
                className={`flex flex-col text-white ${
                  isEven 
                    ? "order-3 text-left items-start" 
                    : "order-1 text-right items-end"
                }`}
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <p className="text-sm sm:text-lg  font-[AppliedRegular] tracking-tight">
                  {p.description}
                </p>
                <p className="text-sm sm:text-md font-[AppliedMedium] tracking-tight mt-2">
                  {p.director}
                </p>
                <motion.a
                  href={p.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm mt-4 inline-flex items-center gap-1 px-2 py-1 rounded-full border border-white/40 hover:bg-white/20 transition font-[AppliedBold]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Youtube size={12} />
                  {t("watch_now")}
                </motion.a>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DirecaoContainer;