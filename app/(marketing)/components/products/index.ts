import massageImg from "@/public/elements/massage.jpg";
import nailImg from "@/public/elements/nail.png";
import hairImg from "@/public/elements/white_hair.png";
import { StaticImageData } from "next/image";

type ProductType = {
  id: number;
  numberService: string;
  nameService: string;
  src: StaticImageData;
  color: string;
  left: boolean;
  text: string;
};

const products: ProductType[] = [
  {
    id: 1,
    numberService: "01",
    nameService: "Unhas",
    src: nailImg,
    color: "#02674d",
    left: true,
    text: "Unhas bem cuidadas são o detalhe que completa qualquer look. Ofereço esmaltação em gel, alongamento e nail art personalizados, com produtos de alta qualidade que garantem durabilidade e um acabamento impecável — porque cada detalhe importa.",
  },
  {
    id: 2,
    numberService: "02",
    nameService: "Cabelo",
    src: hairImg,
    color: "#653954",
    left: false,
    text: "O cabelo é a moldura do rosto e merece um cuidado à altura. De cortes a colorações e tratamentos reconstrutores, cada serviço é pensado para realçar sua beleza natural com técnica, saúde e muito estilo — do jeito que só você pode usar.",
  },
  {
    id: 3,
    numberService: "03",
    nameService: "Massagem",
    src: massageImg,
    color: "#c1ba6d",
    left: true,
    text: "Um momento só seu. A massagem relaxante alia técnicas terapêuticas e toques cuidadosos para aliviar tensões, renovar a energia e devolver o equilíbrio ao corpo e à mente. Porque cuidar de si mesma é o primeiro passo para se sentir incrível.",
  },
];

export default products;