import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

const services = [
  {
    id: "psicoterapia",
    titleKey: "services.psicoterapiaIndividual.title",
    descKey: "services.psicoterapiaIndividual.desc",
  },
  {
    id: "ansiedade",
    titleKey: "services.ansiedadeEstresse.title",
    descKey: "services.ansiedadeEstresse.desc",
  },
  {
    id: "trauma",
    titleKey: "services.traumasEmdr.title",
    descKey: "services.traumasEmdr.desc",
  },
  {
    id: "relacionamentos",
    titleKey: "services.relacionamentosAutoestima.title",
    descKey: "services.relacionamentosAutoestima.desc",
  },
];

const ServicesContainer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-[black] font-[BrandonMedium] mb-4">
            {t("services.label", "Como posso te ajudar")}
          </p>

          <h2 className="text-4xl md:text-5xl font-[BrandonLight] leading-tight">
            {t("services.title", "Áreas de Atuação")}
          </h2>
        </motion.div>

        {/* SERVICES LIST */}
        <div className="flex flex-col divide-y divide-[#e5ded6]">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="py-12 group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                {/* TITLE */}
                <h3 className="text-2xl md:text-3xl font-[BrandonMedium] tracking-wide">
                  {t(service.titleKey)}
                </h3>

                {/* LINE */}
                <div className="hidden md:block flex-1 h-[1px] bg-[#e5ded6] mx-8" />

                {/* DESCRIPTION */}
                <p className="md:max-w-md font-[BrandonLight] text-[#6d655e] leading-relaxed text-sm md:text-base">
                  {t(service.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesContainer;
