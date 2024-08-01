"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="border-2 border-red-700">
      <ul>
        <li
          className="cursor-pointer"
          onClick={() => router.push("/dashboard")}
        >
          Dashboard
        </li>
      </ul>
    </div>
  );
}
