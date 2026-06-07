"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Service from "./Service";
import products from ".";
import { fadeUp, scaleIn, slideLeft, slideRight } from "../animations";

const ProductSection = ({ item }: { item: (typeof products)[0] }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  const imageVariant = item.left ? slideLeft : slideRight;
  const cardVariant = item.left ? slideRight : slideLeft;

  return (
    <section
      ref={ref}
      className={`flex max-sm:flex-col ${
        item.left ? "lg:flex-row" : "lg:flex-row-reverse"
      } justify-center items-center gap-20 min-h-screen w-full px-10 lg:px-24 py-20`}
      style={{ backgroundImage: "url('/background/bege_background.png')" }}
    >
      {/* Imagem */}
      <motion.div
        className="shrink-0 md:w-[38%] max-w-sm"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={imageVariant}
      >
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          style={{ backgroundColor: item.color }}
          variants={scaleIn}
        >
          <Image
            src={item.src}
            alt={item.nameService}
            width={500}
            height={620}
            className="w-full h-[520px] object-cover rounded-3xl"
          />
        </motion.div>
      </motion.div>

      {/* Card */}
      <motion.div
        className="relative flex-1 max-w-2xl md:min-h-200 bg-white rounded-3xl px-12 py-14 flex flex-col justify-evenly items-center text-center shadow-sm"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={cardVariant}
        custom={0.15}
      >
        <motion.h2
          className="font-serif italic leading-tight mb-7"
          style={{
            fontSize: "clamp(2rem, 4vw, 4rem)",
            color: "#7B4A2D",
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
          variants={fadeUp}
          custom={0.25}
        >
          {item.nameService}
          <br />
          <span style={{ fontSize: "0.85em" }}>de</span>
          <br />
          Princesa
        </motion.h2>

        <motion.p
          className="leading-relaxed mb-7"
          style={{ color: "#4a4a4a", fontSize: "1rem", maxWidth: "360px" }}
          variants={fadeUp}
          custom={0.35}
        >
          {item.text}
        </motion.p>

        <div className="absolute -bottom-2 left-4 md:bottom-4 md:left-10 mb-6 opacity-60">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2C16 2 14 8 8 10C8 10 14 12 16 18C18 12 24 10 24 10C18 8 16 2 16 2Z" fill="#b5953a" opacity="0.7" />
            <path d="M16 14C16 14 13 20 7 22C7 22 13 24 16 30C19 24 25 22 25 22C19 20 16 14 16 14Z" fill="#b5953a" opacity="0.5" />
          </svg>
        </div>

        <motion.a
          href="#agendar"
          className="inline-block rounded-full px-8 py-3 text-white font-medium text-sm tracking-wide transition-opacity hover:opacity-90"
          style={{ backgroundColor: item.color }}
          variants={fadeUp}
          custom={0.45}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Agende Sua Experiência
        </motion.a>
      </motion.div>
    </section>
  );
};

const Products = () => {
  return (
    <article
      className="flex flex-col w-full"
      style={{ backgroundImage: "url('/background/bege_background.png')" }}
    >
      <Service />
      {products.map((item) => (
        <ProductSection key={item.id} item={item} />
      ))}
    </article>
  );
};

export default Products;