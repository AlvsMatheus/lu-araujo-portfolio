import React from "react";
import Image from "next/image";
import products from ".";

const Service = () => {
  return (
    <div className="flex flex-col justify-between\ w-full">
      <section className="relative flex md:justify-center items-center min-h-20 w-full py-25 lg:py-40 p-10">
        <h1 className=" text-2xl md:text-3xl uppercase">Nossos Serviços</h1>
      </section>
      <section className="flex flex-col grow lg:flex-row items-center justify-center gap-20 px-6 lg:px-20 py-10">
        <div className="flex flex-col md:flex-row gap-24 md:gap-10">
          {products.map((item) => (
            <div key={item.id} className="flex gap-10">
              <section className="flex flex-col bg-white max-w-90 max-h-130 h-120 md:h-100 lg:h-130">
                <div className="relative h-full">
                  <div className="absolute flex flex-col gap-5 -top-12 left-1/2 -translate-x-1/2">
                    <p 
                    className="text-8xl md:text-6xl lg:text-8xl font-tinos italic"
                    style={{color: item.color}}
                    >
                      {item.numberService} /
                    </p>
                    <p
                      className={`text-8xl md:text-6xl lg:text-8xl max-w-[280px] break-words font-tinos italic leading-18`}
                      style={{ color: item.color }}
                    >
                      {item.nameService}
                    </p>
                  </div>
                </div>
                <Image
                  src={item.src}
                  alt={item.nameService}
                  className="h-full w-full"
                ></Image>
              </section>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Service;
