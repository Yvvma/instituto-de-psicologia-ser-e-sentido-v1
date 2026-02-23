import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import ContactForm from "../../components/Contato/FormContact";
import { Instagram, Youtube, X, Mail } from "lucide-react";

const FooterComponent = () => {
  const { t } = useTranslation();
  const [currentPath, setCurrentPath] = useState("/");
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <>
      <footer className="relative flex flex-col w-full justify-center items-center backdrop-blur-sm pt-1 gap-1 overflow-y-hidden">
        {/* Links + Socials */}
        <div className="flex flex-row w-full items-center justify-center px-8 py-2">
          {/* Left links */}
          <div className="flex flex-row gap-6 items-center justify-center text-center">
        
            <a
              href="/terms-and-privacy"
              className="font-[BrandonBold] tracking-tight text-sm text-black underline underline-offset-2"
            >
              {t("terms.title")}
            </a>
          </div>
          {/* <div className=" flex justify-center py-2">
                      <div className="flex flex-row gap-4 items-center text-[#131819]">
                        <a
                          href="https://www.instagram.com/instituto/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-400"
                        >
                          <Instagram size={24} />
                        </a>
                        <a
                          href="https://wa.me/5511943860734"
                          target="_blank"
                          rel="noopener noreferrer "
                          className="invert hover:text-gray-400"
                        >
                          <img src='/socials/whatsapp.png' alt="X Icon" className="max-w-[24px] invert " />
                        </a>
                       
                      
                      </div>
                    </div> */}


        </div>

        {/* Créditos */}
        <div className="flex flex-col gap-2 items-center justify-between w-full px-8 py-4 border-t border-black/20">
        <div className="py-8">
         <div className="w-full bg-white py-8 rounded-xl drop-shadow-sm">
  <div className="max-w-6xl mx-auto px-6 ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#4a4a4a]">

      {/* Coluna esquerda — Contatos */}
      <div className="space-y-4 text-left">
        <div className="flex items-center gap-3 ">
          
          <span className="text-2xl font-[BrandonBold] tracking-tight">
            Instituto de Psicologia Ser e Sentido
          </span>
        </div>

        <p className="text-sm font-[BrandonRegular]">
          (11) 94386-0734
        </p>

        <p className="text-sm font-[BrandonRegular]">
          contato@ipss.com.br
        </p>
        <p className="text-sm font-[BrandonRegular]">
          psicologia@ipss.com.br
        </p>
        <p className="text-sm font-[BrandonRegular]">
          atendimento@ipss.com.br
        </p>

        <p className="text-sm font-[BrandonRegular] pt-2">
          www.ipss.com.br
        </p>

      </div>

      {/* Coluna direita — Unidades */}
              <div className="space-y-8 text-left">
                <div>
                  <h4 className="font-[BrandonBold] mb-2 text-base tracking-tight">
                    Unidade — Bragança Paulista
                  </h4>
                  <p className="text-sm font-[BrandonRegular]">
                    XXXXXX
                  </p>
                </div>

              
              </div>

            </div>
          </div>
        </div>
        </div>
        <img
            src="/logo/favicon-instituto.png"
            alt="IPSS"
            className="w-10 h-10"
          />
          <p className="font-[BrandonLight] text-xs tracking-tighter text-[#131819] ">
            Produced by Industrie Brasil
          </p>
        </div>
      </footer>

      {/* AnimatePresence Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
            />

            {/* Modal Bottom Sheet */}
            <motion.div
              className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg bg-black border border-white rounded-t-2xl shadow-lg z-50 p-6 max-h-[90vh] overflow-y-auto"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Handle */}
              <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6" />

              <div className="relative flex flex-col items-center text-center">
                <button
                  className="absolute top-4 right-4 text-gray-500 text-xl"
                  onClick={() => setIsContactOpen(false)}
                >
                  ✕
                </button>

                {/* Título */}
                <h2 className="text-2xl font-bold mb-6 text-white">{t("menu.contato")}</h2>

                {/* Form */}
                <div className="text-left w-full">
                  <ContactForm />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FooterComponent;
