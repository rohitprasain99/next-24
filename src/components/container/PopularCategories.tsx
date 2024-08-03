import {
  popularCategories,
  TPopularCategories,
} from "@/utils/constant/popularCategories";
import React from "react";
import PopularCard from "../common/PopularCard";

export default function PopularCategories() {
  return (
    <main className="bg-stone-100 p-4 md:px-16">
      <section className="py-4 text-2xl">Popular Categories</section>
      <section className="grid grid-cols-12 gap-4 md:gap-12">
        {popularCategories.map((item: TPopularCategories, idx: number) => (
          <React.Fragment key={idx}>
            <PopularCard {...item} />
          </React.Fragment>
        ))}
      </section>
    </main>
  );
}
