"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../animations";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp}
      className="bg-[#fdf6f0] border-t border-[#e8ddd6] pt-12"
    >
      <div className="max-w-5xl mx-auto md:justify-items-center px-8 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Endereço */}
        <div className="flex flex-col gap-1">
          <h4 className="footer-heading">Endereço</h4>
          <p className="footer-text">Bernardino de Campos 98</p>
          <p className="footer-text">São Paulo, SP 12345-678</p>
        </div>

        {/* Contato */}
        <div className="flex flex-col gap-1">
          <h4 className="footer-heading">Contato</h4>
          <p className="footer-text">Tel: (11) 3456-7890</p>
          <p className="footer-text">Fax: (11) 3456-7890</p>
          <p className="footer-text">Email: info@meusite.com</p>
        </div>

        {/* Horários */}
        <div className="flex flex-col gap-1">
          <h4 className="footer-heading">Horários</h4>
          <p className="footer-text">Seg-Qui: 9:00-20:00</p>
          <p className="footer-text">Sex: 9:00-20:00</p>
          <p className="footer-text">Domingo: 9:00-15:00</p>
        </div>
      </div>

      <div className="border-t border-[#e8ddd6] py-4 px-8 text-center">
        <p className="text-[14px] font-light text-[#9a9a9a] tracking-wide">
          © {currentYear} Matheus Alves. Todos os direitos reservados.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;