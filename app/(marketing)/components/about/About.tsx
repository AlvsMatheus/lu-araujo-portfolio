import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="flex flex-col justify-between w-full"
      style={{ backgroundImage: "url('/background/bege_background.png')" }}
    >
      <section className="relative flex md:justify-center items-center min-h-20 w-full pt-25 lg:py-20 p-10">
        <h1 className=" text-2xl md:text-3xl uppercase">Quem sou ?</h1>
        <div className="absolute right-10 md:right-25 flex justify-center items-center gap-2 uppercase md:pe-8">
          <p className="text-[#923e3e] text-1xl tracking-wider">Serviços</p>
          <span className="h-5 w-1 bg-[#923e3e]"></span>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-20 px-6 lg:px-20 py-10 flex-grow">
        <div className="relative w-full max-w-[450px]">
          <Image
            src="/elements/about_hair_lg.jpg"
            alt="Profissional cuidando do cabelo"
            width={500}
            height={750}
            className="w-full h-auto rounded-t-full max-sm:rounded-3xl shadow-xl"
            priority
          />
        </div>

        <div className="flex flex-col gap-8 w-full lg:w-1/2 items-center lg:items-end">
          <div className="bg-[#923e3e] rounded-[40px] p-8 md:p-12 shadow-lg">
            <p className="text-white text-base md:text-lg leading-relaxed text-center lg:text-right">
              Meu trabalho é dedicado a unir técnica, saúde e estilo para criar
              resultados que superem as expectativas. Entendo que o cabelo é a
              moldura do rosto e um dos principais pilares da autoestima
              feminina, por isso, cada atendimento é tratado como um projeto
              único.
            </p>
          </div>

          <a
            href="#"
            className="bg-[#923e3e] hover:scale-105 transition-transform text-white px-8 py-4 rounded-full shadow-md self-center lg:self-end lg:mr-10"
          >
            Conheça nosso trabalho
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
