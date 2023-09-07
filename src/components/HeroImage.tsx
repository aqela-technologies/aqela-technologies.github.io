import Image from "next/image";
import React from "react";
import HeroImageFile from "@/assets/images/png/hero-cropped.png";
import Radiant from "@/assets/images/png/radiant.png";
export default function HeroImage() {
  return (
    <>
      <Image
        src={HeroImageFile}
        alt="hero-image"
        className="absolute -z-10 h-full object-cover md:left-0 md:top-0 md:h-auto md:w-screen"
      />
      <Image src={Radiant} alt="radiant" className="absolute right-0 -z-20 md:hidden" />
    </>
  );
}
