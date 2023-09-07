import React from "react";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import HeroImage from "@/components/HeroImage";
import SubTitleText from "@/components/texts/SubTitleText";
import Link from "next/link";

const heroTexts = ["Transforming", "the future with", "blockchain", "technology"];
export default function Hero() {
  return (
    <div className="relative my-[5%] flex w-full flex-col gap-8 pl-4 lg:container md:pl-0">
      <HeroImage />
      <div>
        {heroTexts.map((item) => (
          <h1
            key={item}
            className="max-w-4xl font-new-alenia text-2xl font-bold uppercase text-primaryWhite md:text-8xl"
          >
            {item}
          </h1>
        ))}
      </div>
      <SubTitleText>
        Our expertise in blockchain, React, and other modern frameworks enables us to develop innovative solutions that
        drive growth and efficiency for our clients.
      </SubTitleText>
      <div>
        <Link href={"/blockchain-projects"}>
          <OutlinedButton>Find out more</OutlinedButton>
        </Link>
      </div>
    </div>
  );
}
