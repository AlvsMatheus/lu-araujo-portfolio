"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, slideLeft, staggerContainer, socialContainer, socialItem } from "../animations";

const NAV_LINKS = ["Home", "Quem sou", "Serviços", "Contato"];
const MOBILE_LINKS = ["Quem sou", "Serviços", "Contato"];
const SOCIAL_ICONS = [
  { src: "/icons/instagram_white.png", alt: "instagram icon" },
  { src: "/icons/facebook_white.png", alt: "facebook icon" },
  { src: "/icons/whatsapp_white.png", alt: "whatsapp icon" },
];

const Header = () => {
  return (
    <header
      className="relative h-full w-full bg-cover bg-center md:bg-top-right bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/background/esmalte_background.png')" }}
    >
      <div className="flex flex-col justify-center items-center gap-25 md:gap-5 lg:gap-30">

        <div className="flex justify-between items-center w-full px-5 py-5 gap-4 md:px-20 md:py-8">
          <motion.nav
            className="hidden md:flex justify-center items-center gap-2 md:gap-8 md:text-sm lg:text-lg uppercase"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            custom={{ stagger: 0.1, delay: 0.2 }}
          >
            {NAV_LINKS.map((item) => (
              <motion.a
                key={item}
                className="relative text-[#923e3e] group cursor-pointer"
                variants={fadeUp}
              >
                {item}
                <span className="underline_effect" />
              </motion.a>
            ))}
          </motion.nav>

          <motion.div
            className="relative flex flex-col justify-center gap-4 item-start md:items-end"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0.5}
          >
            <span className="relative z-10 flex items-center gap-2 text-md lg:md:text-[1.2rem] text-[#923e3e]">
              <p>Serviços à domicilio</p>
              <Image src="/icons/home_icon.png" alt="home icon" width={30} height={30} />
            </span>
            <motion.span
              className="relative z-10 flex justify-center items-center text-[10px] lg:text-[12px] bg-[#923e3e] rounded-full text-white px-3 lg:px-5 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <a className="uppercase font-bold" href="#">Marcar horário</a>
            </motion.span>
            <div className="absolute -top-10 -left-10 z-0 h-60 w-100 bg-radial from-white to-white/10 rounded-full" />
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.35}
        >
          <h1 className="text-8xl md:text-8xl lg:text-9xl font-daydream text-[#923e3e] text-center text-nowrap px-5">
            Lu <span className="text-black">Araujo</span>
          </h1>
        </motion.div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-[67%] md:top-1/3 md:left-10 flex flex-col justify-center items-center gap-8">
        <motion.div
          className="flex gap-4 md:flex-col"
          initial="hidden"
          animate="visible"
          variants={socialContainer}
        >
          {SOCIAL_ICONS.map(({ src, alt }) => (
            <motion.a
              key={alt}
              className="flex justify-center items-center rounded-full p-3 bg-[#923e3e]"
              href="#"
              variants={socialItem}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
            >
              <Image width={20} height={20} src={src} alt={alt} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="md:hidden flex flex-col text-center gap-4 text-[#923e3e]"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          custom={{ stagger: 0.1, delay: 1.0 }}
        >
          {MOBILE_LINKS.map((item) => (
            <motion.a key={item} href="#" variants={slideLeft}>
              {item}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </header>
  );
};

export default Header;