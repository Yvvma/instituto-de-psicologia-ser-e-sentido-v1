import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Youtube } from "lucide-react";

const CoreographerContainer = () => {
  const { t } = useTranslation();

  const projects = [
    {
      artist: t("coreographer.works.iza.title"),
      title: t("coreographer.works.iza.person"),
      video: "/live/brisa-the-town-iza.mp4",
      description: t("coreographer.works.iza.desc"),
      director: t("coreographer.works.iza.director"),
      youtube: "https://youtube.com/shorts/LC0d-rUXyZA?si=g0q2_9GzNfN-0uf1",
    },
    {
      artist: t("coreographer.works.marina.title"),
      title: t("coreographer.works.marina.person"),
      video: "/live/marina-sena-live-natasha_oe3fyp.mp4",
      description: t("coreographer.works.marina.desc"),
      director: t("coreographer.works.marina.director"),
      youtube: "https://youtu.be/RAPsVtoBPiw?feature=shared",
    },
    {
      artist: t("coreographer.works.ivete.title"),
      title: t("coreographer.works.ivete.person"),
      video: "/live/ivete_hn2tzf.mp4",
      description: t("coreographer.works.ivete.desc"),
      director: t("coreographer.works.ivete.director"),
      youtube: "https://www.youtube.com/watch?v=gJcAWUY8hZA",
    },
    {
      artist: t("coreographer.works.rebecca.title"),
      title: t("coreographer.works.rebecca.person"),
      video: "/live/rebecca-rock-in-rio_wzv6ye.mp4",
      description: t("coreographer.works.rebecca.desc"),
      director: t("coreographer.works.rebecca.director"),
      youtube: "https://youtu.be/wW0UpE0G3Gg?feature=shared",
    },
    {
      artist: t("coreographer.works.duda.title"),
      title: t("coreographer.works.duda.person"),
      video: "/live/duda-beat_zjahsl.mp4",
      description: t("coreographer.works.duda.desc"),
      director: t("coreographer.works.duda.director"),
      youtube: "https://youtu.be/BXiGZDtYQUY?feature=shared",
    },
    {
      artist: t("coreographer.works.ludmilla.title"),
      title: t("coreographer.works.ludmilla.person"),
      video: "/performer/live/ludmilla.mov",
      description: t("coreographer.works.ludmilla.desc"),
      director: t("coreographer.works.ludmilla.director"),
      youtube: "https://youtu.be/j9KbZ0kc7o0?si=kqqgS1hVWib0yowk",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full bg-[#111111] pb-8">
      {/* Title */}
      <div className="flex flex-col items-center gap-2 max-w-max py-8">
        <h1 className="text-white font-[AppliedBold] tracking-tight text-center text-2xl uppercase ">
          {t("coreographer.title")}
        </h1>
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="block h-[2px] w-full bg-white origin-center"
        />
      </div>

      {/* Projects */}
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
                <p className="text-sm sm:text-lg font-[AppliedRegular] tracking-tight">
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

export default CoreographerContainer;