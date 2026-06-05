"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, slideLeft, slideRight } from "../animations";

const About = () => {
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const cardRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const imageInView = useInView(imageRef, { once: true, amount: 0.2 });
  const cardInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <div
      className="flex flex-col justify-between w-full"
      style={{ backgroundImage: "url('/background/bege_background.png')" }}
    >
      <section
        ref={headingRef}
        className="relative flex md:justify-center items-center min-h-20 w-full pt-25 lg:py-20 p-10"
      >
        <motion.h1
          className="text-2xl md:text-3xl uppercase"
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          Quem sou ?
        </motion.h1>

        <motion.div
          className="absolute right-10 md:right-25 flex justify-center items-center gap-2 uppercase md:pe-8"
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          variants={slideRight}
          custom={0.15}
        >
          <p className="text-[#923e3e] text-1xl font-tinos">Serviços</p>
          <span className="h-5 w-1 bg-[#923e3e]" />
        </motion.div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-center gap-20 px-6 lg:px-20 py-10 flex-grow">
        <motion.div
          ref={imageRef}
          className="relative w-full max-w-[450px]"
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          variants={slideLeft}
        >
          <Image
            src="/elements/about_hair_lg.jpg"
            alt="Profissional cuidando do cabelo"
            width={500}
            height={750}
            className="w-full h-auto rounded-t-full max-sm:rounded-3xl shadow-xl"
            priority
          />
        </motion.div>

        <div
          ref={cardRef}
          className="flex flex-col gap-8 w-full lg:w-1/2 items-center lg:items-end"
        >
          <motion.div
            className="bg-[#923e3e] rounded-[40px] p-8 md:p-12 shadow-lg"
            initial="hidden"
            animate={cardInView ? "visible" : "hidden"}
            variants={slideRight}
            custom={0.1}
          >
            <p className="text-white text-base md:text-lg leading-relaxed text-center lg:text-right">
              Meu trabalho é dedicado a unir técnica, saúde e estilo para criar
              resultados que superem as expectativas. Entendo que o cabelo é a
              moldura do rosto e um dos principais pilares da autoestima
              feminina, por isso, cada atendimento é tratado como um projeto
              único.
            </p>
          </motion.div>

          <motion.a
            href="#"
            className="bg-[#d47676] text-white px-8 py-4 rounded-full shadow-md self-center lg:self-end lg:mr-10"
            initial="hidden"
            animate={cardInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0.3}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Conheça nosso trabalho
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default About;