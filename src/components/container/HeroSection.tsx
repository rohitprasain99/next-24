import Image from "next/image";
import HeroImg from "../../../public/heroImg.webp";

const imageStyle = { width: "100vw", height: "100%" };
export default function HeroSection() {
  return (
    <main className="relative">
      <section>
        <Image src={HeroImg} style={imageStyle} alt="nepal homes"></Image>{" "}
      </section>
      <div className="flex justify-center">
        <section className="hidden md:block absolute bottom-4 p-3 bg-white w-4/6 rounded-md">
          Search Property
        </section>
      </div>

      <section className=" md:hidden  ">
        <input
          type="text"
          placeholder="Search Property"
          className="p-3 bg-white w-full"
        />
      </section>
    </main>
  );
}
