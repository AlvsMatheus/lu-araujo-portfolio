import massageImg from "@/public/elements/massage.jpg";
import nailImg from "@/public/elements/nail.png";
import hairImg from "@/public/elements/white_hair.png";
import { StaticImageData } from "next/image";


type ProductType = {
    id: number,
    nameService: string,
    src: StaticImageData,
    color: string
}

const products: ProductType[] = [
    {
        id:1,
        nameService: "Unhas",
        src: nailImg,
        color: "#02674d"
    },
    {
        id:2,
        nameService: "Cabelo",
        src: hairImg,
        color: "#653954"
    },
    {
        id:3,
        nameService: "Massagem",
        src: massageImg,
        color: "c1ba6d"
    }
]

export default products;