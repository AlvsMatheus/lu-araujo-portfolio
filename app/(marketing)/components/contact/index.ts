import type { StaticImageData } from "next/image";
import nailIcon from "@/public/icons/clock_icon.png";
import locationIcon from "@/public/icons/clock_icon.png";
import clockIcon from "@/public/icons/clock_icon.png";

interface Card {
  id: number;
  icon: StaticImageData;
  text: string;
}

const contactCard: Card[] = [
  {
    id: 1,
    icon: locationIcon,
    text: "Atendemos pelo centro do RJ",
  },
  {
    id: 2,
    icon: clockIcon,
    text: "horário das 10:00 às 17:00",
  },
  {
    id: 3,
    icon: nailIcon,
    text: "Serviço de qualidade",
  },
];

export default contactCard;
