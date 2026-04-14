import React from "react";
import Image from "next/image";
import Service from "./Service";


const Products = () => {
  return (
    <article 
    className="flex flex-col w-full"
    style={{ backgroundImage: "url('/background/bege_background.png')" }}
    >
      <Service/>

    </article>
  );
};

export default Products;
