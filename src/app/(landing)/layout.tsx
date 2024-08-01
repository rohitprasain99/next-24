import Footer from "@/components/partials/Footer";
import Navbar from "@/components/partials/Navbar";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("landing layout mounted");

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
