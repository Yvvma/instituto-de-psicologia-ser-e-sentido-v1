import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

interface ServiceCard {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  features: string[];
  isVip?: boolean;
  link?: string;
}

interface ServicesContainerProps {
  services?: ServiceCard[];
}

const PodcastContainer: React.FC<ServicesContainerProps> = ({
  services = [
    {
      id: "japodecasst",
      titleKey: "japodecast.title",
      descriptionKey: "services.marketing.description",
      image: "/videos/japodecast.mp4",
      features: [
        "services.marketing.feature1",
        "services.marketing.feature2",
        "services.marketing.feature3",
        "services.marketing.feature4",
        "services.marketing.feature5"
      ],
      link: "/japodecast"
    },
   
  ]
}) => {
  const { t } = useTranslation();

  return (
    <div
    id='japodecast'
    className="w-full bg-[#131313] py-16 px-4 flex justify-center items-center">
      <div className="max-w-7xl mx-auto flex  flex-col justify-center items-center gap-4">
     

        <div className="flex sm:flex-row flex-col gap-6">
          {services.map((service, index) => (
            <motion.div
                id={service.id}
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glowing Diamond */}
              <div className="relative h-20 flex items-center justify-center overflow-visible mb-3">
                <motion.div
                  initial={{ rotateX: 90, scale: 0.5, opacity: 0 }}
                  whileInView={{ rotateX: 0, scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                  className="relative "
                  style={{ perspective: 1000 }}
                >
                  {/* Outer glow */}
                  <div
                    className={`absolute inset-0 blur-3xl ${
                      service.isVip
                        ? 'bg-yellow-500/50'
                        : 'bg-[#e96060]/50'
                    }`}
                    style={{ transform: 'scale(2.5)' }}
                  />
                  
                  {/* Middle glow */}
                  <div
                    className={`absolute inset-0 blur-2xl ${
                      service.isVip
                        ? 'bg-yellow-400/60'
                        : 'bg-[#e96060]/60'
                    }`}
                    style={{ transform: 'scale(1.8)' }}
                  />
                  
                  {/* Diamond shape (rotated square) */}
                  <div className="relative w-8 h-8 rotate-45">
                    <div
                      className={`absolute inset-0 ${
                        service.isVip
                          ? 'bg-gradient-to-br from-yellow-400 to-yellow-600'
                          : 'bg-gradient-to-br from-[#e96060 to-[#ff3636]'
                      } shadow-2xl`}
                    />
                    <div
                      className={`absolute inset-1 ${
                        service.isVip
                          ? 'bg-gradient-to-br from-yellow-300 to-yellow-500'
                          : 'bg-gradient-to-br from-[#e96060] to-[#fb3939]'
                      }`}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Card Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="relative overflow-hidden rounded-xl shadow-2xl h-[280px] min-w-[320px]"
              >
                {/* Background Image */}
                <video
                  src={service.image}
                  autoPlay
                  playsInline
                  muted
                  className="absolute inset-0 w-full h-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/95" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end">
                  {/* Service Title with Solid Background */}
                  <div className={`px-5 py-3 ${
                    service.isVip
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600'
                      : 'bg-gradient-to-r from-[#e96060] to-[#ff3636]'
                  }`}>
                    <h3 className="text-md font-[MotoyaCedarW8] text-white tracking-tighter uppercase text-center">
                      {t(service.titleKey)}
                    </h3>
                  </div>


                
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
               className="max-w-4xl w-full  bg-[black]/50 flex rounded-lg p-4  justify-center items-center"
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
             >
               <motion.div 
                 className="flex flex-col items-center text-center justify-center gap-2 "
                 initial={{ scale: 0.8 }}
                 animate={{ scale: 1 }}
                 transition={{ 
                   delay: 0.2, 
                   duration: 0.5, 
                   ease: "easeOut" 
                 }}
               >
                  <p className="text-xs text-white  font-[MotoyaCedarW4] tracking-tighter">
                    {t('japodecast.release1')}
                  </p>

                    <p className="text-xs text-white  font-[MotoyaCedarW4] tracking-tighter">
                      {t('japodecast.release2')}
                    </p>
                      <p className="text-xs text-white  font-[MotoyaCedarW4] tracking-tighter">
                      {t('japodecast.release3')}
                    </p>

                      

                      {services.map((service, index) => (
                  <div className="relative w-full flex flex-row items-end justify-end px-4">
                    <a
                    href={service.link}
                    className={`w-full py-2.5 text-xs max-w-max font-[MotoyaCedarW6] text-white uppercase tracking-tight transition-all duration-300`}>
                      {t('services.seeMore', 'Ver Mais')}
                    </a>
                  </div>
                  ))}

        </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PodcastContainer;