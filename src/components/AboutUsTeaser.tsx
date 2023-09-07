import React from "react";
import ArrowRight from "../assets/images/svg/arrow-right-large.svg";
import Image from "next/image";
import TextButton from "@/components/buttons/TextButton";
import SecondaryHero from "../assets/images/png/secondary-hero-graphics.png";
import SecondaryTitle from "@/components/texts/SecondaryTitle";
import Link from "next/link";

export default function AboutUsTeaser() {
  return (
    <div className="relative mb-60 mt-24 w-full pl-4 lg:container md:mt-0 lg:pl-0">
      <div className="flex w-full flex-row-reverse ">
        <SecondaryTitle align="right">
          we are passionate about leveraging cutting-edge technology to innovate and shape the future.
        </SecondaryTitle>
      </div>
      <div className="mt-12 flex flex-row gap-3 md:gap-12">
        <Image
          src={SecondaryHero}
          alt={"second-hero"}
          className="absolute left-0 top-2/3 -z-10 h-full object-cover md:top-auto md:w-full"
        />
        <Image src={ArrowRight} alt={"arrow-right-large"} className="h-7 w-7 md:h-20 md:w-20" />
        <p className="pr-12 font-visby text-base font-normal text-primaryWhite md:w-[70%] md:text-3xl md:leading-[46px]">
          With a forward-thinking approach and a commitment to staying ahead of the curve in the rapidly evolving tech
          industry, we are dedicated to providing the best possible solutions to our clients&apos; needs.
        </p>
      </div>
      <div className="mt-8 flex flex-row-reverse items-center justify-end gap-4 md:mt-0 md:justify-start">
        <Image src={ArrowRight} alt={"arrow-right-large"} className="relative bottom-[2px] h-6 w-6" />
        <Link href={"/about"}>
          <TextButton color="secondary">ABOUT US</TextButton>{" "}
        </Link>
      </div>
    </div>
  );
}
