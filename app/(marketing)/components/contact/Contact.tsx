"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import contactCard from "."; 
import { fadeUp, cardContainer } from "../animations";

const Contact = () => {
  return (
    <article
      style={{ backgroundImage: "url('/background/bege_background.png')" }}
      className="w-full py-24 bg-cover bg-center"
    >
      <div className="flex flex-col gap-20 w-full items-center">
        <motion.h1 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl md:text-6xl font-tinos italic text-[#923e3e] text-center mb-20"
        >
          Serviço a domicílio!
        </motion.h1>

        <motion.section 
          className="flex flex-col md:flex-row gap-12 md:gap-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} 
          variants={cardContainer}
        >
          {contactCard.map((item) => (
            <motion.div 
              key={item.id} 
              className="relative"
              variants={fadeUp} 
            >
              <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-16 h-16 rounded-full bg-[#923e3e] flex items-center justify-center shadow-md">
                <Image src={item.icon} alt="" width={30} height={30} className="object-contain" />
              </div>

              <div className="w-56 h-50 bg-white rounded-[30px] flex items-center justify-center px-6 shadow-sm">
                <p className="text-center text-[#923e3e] font-tinos text-lg italic">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.section>

        <motion.a
          href="#"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4} 
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-20 bg-[#c78d8d] text-white font-tinos italic text-2xl px-12 py-3 rounded-full"
        >
          Agendar horário
        </motion.a>
      </div>
    </article>
  );
};

export default Contact;