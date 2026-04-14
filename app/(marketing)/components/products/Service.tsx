import React from "react";
import Image from "next/image";
import products from ".";

const Service = () => {
  return (
    <div
      className="flex flex-col justify-between\ w-full"
    >
      <section className="relative flex md:justify-center items-center min-h-20 w-full pt-25 lg:py-40 p-10">
        <h1 className=" text-2xl md:text-3xl uppercase">Nossos Serviços</h1>
      </section>
      <section className="flex flex-col grow lg:flex-row items-center justify-center gap-20 px-6 lg:px-20 py-10">
        <div className="flex flex-col md:flex-row gap-10">
        {products.map((item) => (
          <div key={item.id} className="flex gap-10">
            <section className="flex flex-col bg-white max-w-90 max-h-120 h-120">
              <div className="relative w-[50%] h-full">
                
              </div>
              <Image src={item.src} alt={item.nameService} className="h-full w-full"></Image>
            </section>
          </div>
        ))}
        </div>
      </section>
    </div>
  );
};

export default Service;
