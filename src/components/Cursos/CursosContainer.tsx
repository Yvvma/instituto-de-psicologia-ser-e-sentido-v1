import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CursosCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const [focusedIndex, setFocusedIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setFocusedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const cursos = [
    {
      artist: "Tutorial Bota que Bota",
      title: "by Natasha Sousa",
      image: "/courses/01.jpeg",
      description: t("cursos.works.bota_que_bota.desc"),
      price: "R$ 36.90",
      link: "https://pay.kiwify.com.br/CAtsU3X",
    },
    {
      artist: "Tutorial Cavaquinho Saliente",
      title: "by Natasha Sousa",
      image: "/courses/02.jpeg",
      description: t("cursos.works.cavaquinho.desc"),
      price: "R$ 36.90",
      link: "https://pay.kiwify.com.br/6FTKNNG",
    },
    {
      artist: "Tutorial Sua Preferida",
      title: "by Natasha Sousa",
      image: "/courses/03.jpeg",
      description: t("cursos.works.sua_preferida.desc"),
      price: "R$ 36.90",
      link: "https://pay.kiwify.com.br/jsUCRUf",
    },
  ];

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="w-full flex flex-col gap-6 py-8 px-8 md:px-32 bg-black">
      <h2 className="text-2xl font-[AppliedBold] tracking-tight text-white">{t("tutorials.title")}</h2>
      
      {/* Carousel */}
      <div className="overflow-hidden sm:overflow-visible" ref={emblaRef}>
        <div className="flex gap-4">
          {cursos.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                whileHover={{scale:1.05}}
                className="relative min-w-[280px] sm:min-w-[340px] md:min-w-[380px] rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
              >
              {/* Course Image */}
              <div className="aspect-[3/4] w-full bg-black max-w-[360px] rounded-2xl relative">
                <motion.img
                  src={p.image}
                  alt={p.artist}
                  className="w-full h-full object-cover rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  viewport={{once:false}}
                  transition={{ duration: 0.6, delay: i * 0.2 }} 
                />

                {/* Top info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  viewport={{once:false}}
                  transition={{ duration: 0.6, delay: i * 0.2 + 0.1 }}
                  className="absolute top-4 left-4 z-10"
                >
                  <p className="text-sm sm:text-lg font-[AppliedRegular] tracking-tight text-white">{p.artist}</p>
                  <h3 className="text-lg font-[AppliedBold] text-white">{p.title}</h3>
                </motion.div>

                {/* Hover overlay with bottom text/gradient */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end rounded-2xl"
                  initial="rest"
                  whileHover="hover"
                  animate={i === focusedIndex ? "hover" : "rest"}
                >
                  {/* Bottom gradient + text */}
                  <div className="relative w-full">
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl" />
                    
                    <motion.div
                      className="relative p-4 text-white text-sm"
                      variants={{
                        rest: { y: 32, opacity: 0 },
                        hover: { y: 0, opacity: 1 },
                      }}
                      transition={{ duration: 0.4, ease: "easeIn" }}
                    >
                      <p className="font-[AppliedRegular] tracking-tight text-md sm:text-lg ">{p.description}</p>
                      <p className="mt-1 font-[AppliedBold] text-lg">{p.price}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between gap-4 mt-4">
        <div className="flex flex-row">
          <a href='/aulas'>
            <h2 className="text-xl font-[AppliedBold] text-white">{t("swipers.button")}</h2>
          </a>
        </div>
        <div className="flex gap-4">
          <button
            onClick={scrollPrev}
            className="p-2 rounded-full border-1 text-white hover:bg-gray-700 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="p-2 rounded-full border-1 text-white hover:bg-gray-700 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
