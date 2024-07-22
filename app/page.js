import Reasons from "@/components/Reasons";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto  px-[16px]">
      <Header />
      <Hero />
      <Reasons />
    </div>
  );
}
