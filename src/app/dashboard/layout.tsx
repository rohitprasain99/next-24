"use client";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  console.log("dashboard layout mounted");

  return (
    <>
      <nav>
        <ul>
          <li
            className="cursor-pointer"
            onClick={() => router.push("/dashboard")}
          >
            dHome
          </li>
          <li
            className="cursor-pointer"
            onClick={() => router.push("/dashboard/event")}
          >
            eHome
          </li>

          <li className="cursor-pointer" onClick={() => router.push("/")}>
            HOME
          </li>
        </ul>
      </nav>

      {children}

      <div>footer dashboard</div>
    </>
  );
}
