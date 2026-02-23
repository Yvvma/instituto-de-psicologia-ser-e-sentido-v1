import { motion } from "framer-motion";
import { t } from "i18next";
import React from "react";
import {CirclePlus} from 'lucide-react'

interface Release {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  link?: string;
}

interface ReleaseContainerProps {
  release?: Release;
}

const ReleaseContainer: React.FC<ReleaseContainerProps> = ({}) => {


  
  return (
    <div className="w-full flex flex-col justify-center items-center  bg-[#f3ebe5]">
      <div className="flex w-full h-0.5 bg-[#131819]/80"/>
        
        <div className="flex px-8 py-4">
      <motion.div 
        className="max-w-4xl w-full    rounded-lg p-4  justify-center items-center gap-4 flex-col flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="flex flex-col items-center text-left justify-center py-4 gap-4"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: 0.2, 
            duration: 0.5, 
            ease: "easeOut" 
          }}
        >
         
          <p className="text-md text-[#131819] uppercase  font-[BrandonBold] text-center tracking-widest">
            "{t('home.release')}"
          </p>
           <h1 className="text-2xl text-[#131819]   font-[Priestacy] tracking-tight ">Dra. Monica Lorena</h1>

        </motion.div>

      </motion.div>
      </div>

      <div className="flex w-full h-0.5 bg-[#131819]/80"/>
      
    </div>
  );
};

export default ReleaseContainer;
