import React from "react";
import Image from "next/image";
import MailForm from "@/components/MailForm";
import AqelaWhiteLogo from "../assets/images/svg/aqela-logo-white.svg";
import TextButton from "@/components/buttons/TextButton";
import FacebookIcon from "../assets/images/svg/facebook.svg";
import InstagramIcon from "../assets/images/svg/instagram.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div id="contact-us" className="relative pb-36 2xl:container 2xl:mx-auto">
      <div className="relative w-full">
        <div className="w-full bg-contact-us bg-cover bg-center py-20">
          <MailForm />
        </div>
      </div>
      <div className="mx-8 flex flex-col gap-8 border-b-2 pb-8 md:mx-16 md:flex-row md:justify-between md:gap-0">
        <Image src={AqelaWhiteLogo} alt={"aqela-white-logo"} />
        <div className="flex w-full flex-col justify-between md:mr-8 md:w-1/2 md:flex-row">
          <div className="grid grid-cols-2 justify-start gap-8 gap-x-16">
            <div>
              <Link href="/">
                <TextButton>HOME</TextButton>
              </Link>
            </div>
            <div>
              <a href="https://anpc.ro/">
                <TextButton>ANPC </TextButton>
              </a>
            </div>
            <div>
              <Link href="/about">
                <TextButton>ABOUT US</TextButton>
              </Link>
            </div>
            <div>
              <a href="https://anpc.ro/ce-este-sal/">
                <TextButton>ANPC SAL</TextButton>
              </a>
            </div>
            <div>
              <Link href="/blockchain-projects">
                <TextButton>Blockchain Projects</TextButton>
              </Link>
            </div>
            <div>
              <Link href="/contamy-nation">
                <TextButton>ContamyNation</TextButton>
              </Link>
            </div>
          </div>
          <div className="mb-5 mt-5 flex flex-row gap-8 md:mt-0">
            <div className="flex flex-row items-end gap-8">
              <a href="https://www.facebook.com/profile.php?id=100091977457554">
                <Image src={FacebookIcon} alt={"facebook icon"} />
              </a>
              <a href="https://www.instagram.com/aqelatechnologies/">
                <Image src={InstagramIcon} alt={"instagram icon"} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-16 mt-8 flex flex-col justify-between gap-8 text-center md:flex-row md:gap-0 md:text-start">
        <p className="text-primaryWhite">©Aqela Technologies. All rights reserved.</p>
        <div className="flex flex-row  justify-center gap-6 text-primaryWhite md:mr-8 md:justify-start">
          <Link href={"terms-and-conditions"}>
            <p>Terms and conditions</p>
          </Link>
          <Link href={"/privacy-policy"} className="text-white">
            <p>Privacy</p>
          </Link>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 h-1/3 w-full bg-gradient-to-t from-primaryBlack to-transparent" />
    </div>
  );
}
