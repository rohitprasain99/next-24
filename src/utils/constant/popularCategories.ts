import { StaticImageData } from "next/image";
import HeroImg from "../../../public/heroImg.webp";
export const popularCategories = [
  {
    image: HeroImg,
    title: "House",
    frequency: 3728,
  },
  {
    image: HeroImg,
    title: "Land",
    frequency: 1786,
  },
  {
    image: HeroImg,
    title: "Flats",
    frequency: 103,
  },
  {
    image: HeroImg,
    title: "Office Space",
    frequency: 172,
  },
];

export type TPopularCategories = {
  image: StaticImageData;
  title: string;
  frequency: number;
};
