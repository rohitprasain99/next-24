import { TPopularCategories } from "@/utils/constant/popularCategories";
import Image from "next/image";

export default function PopularCard({
  image,
  title,
  frequency,
}: TPopularCategories) {
  return (
    <main className="flex flex-col justify-center items-center col-span-6 md:col-span-3 bg-white rounded-3xl px-2 py-6">
      <section className="flex py-2" style={{ height: "95px", width: "95px" }}>
        <Image
          src={image}
          alt="category-image"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        ></Image>
      </section>
      <section className="py-2 text-lg">{title}</section>
      <section className="py-2 text-lg">{frequency}</section>
    </main>
  );
}
