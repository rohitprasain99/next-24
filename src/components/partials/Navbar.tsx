"use client";
import { useRouter } from "next/navigation";
import Logo from "./Logo";
import React from "react";
import { navbarItems, TNavbarItems } from "@/utils/constant/navbarItems";

export default function Navbar() {
  const router = useRouter();
  return (
    <main className="flex justify-between items-center py-4 md:px-16">
      <div className="pl-4 md:p-0">
        <Logo />
      </div>
      <div className="md:hidden pr-4">
        <button className="bg-primary py-2 px-5 rounded text-white">
          Login
        </button>
        {/* <span>--</span> */}
      </div>
      <div className="hidden md:flex items-center">
        {navbarItems.map((item: TNavbarItems, idx: number) => (
          <React.Fragment key={idx}>
            <div className="px-3">{item.name}</div>
          </React.Fragment>
        ))}
        <button className="border-primary border-2 py-2 px-6 rounded ">
          Login
        </button>
      </div>
    </main>
  );
}
