"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import products from ".";
import { fadeUp, cardContainer, scaleIn } from "../animations";

const Service = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.2 });

  return (
    <div className="flex flex-col justify-between w-full">
      <section
        ref={headingRef}
        className="relative flex md:justify-center items-center min-h-20 w-full py-25 lg:py-40 p-10"
      >
        <motion.h1
          className="text-2xl md:text-3xl uppercase"
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          Nossos Serviços
        </motion.h1>
      </section>

      <section className="flex flex-col grow lg:flex-row items-center justify-center gap-20 px-6 lg:px-20 py-10">
        <motion.div
          ref={cardsRef}
          className="flex flex-col md:flex-row gap-24 md:gap-10"
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          variants={cardContainer}
        >
          {products.map((item) => (
            <motion.div
              key={item.id}
              className="flex gap-10"
              variants={scaleIn}
            >
              <section className="flex flex-col bg-white max-w-90 max-h-130 h-120 md:h-100 lg:h-130 overflow-hidden">
                <div className="flex justify-center items-center w-full h-full">
                  <p
                    className="text-7xl font-tinos"
                    style={{ color: item.color }}
                  >
                    {item.nameService}
                  </p>
                </div>
                <Image
                  src={item.src}
                  alt={item.nameService}
                  className="h-full w-full object-cover"
                />
              </section>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Service;