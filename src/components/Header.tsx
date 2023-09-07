"use client";
import React from "react";
import Image from "next/image";
import AqelaLogo from "../assets/images/svg/aqela.svg";
import Search from "../assets/images/svg/search.svg";
import TextButton from "@/components/buttons/TextButton";
import Link from "next/link";
import { Button, Menu, MenuItem } from "@material-ui/core";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="flex flex-row items-center justify-between bg-primaryBlack px-20 py-5 2xl:container 2xl:mx-auto">
      <Link href={"/"}>
        <Image className="" src={AqelaLogo} alt={"aqela-logo"} />
      </Link>
      <div className="flex hidden w-1/2 flex-row items-center justify-between">
        <Link href={"/about"}>
          {" "}
          <TextButton>About us</TextButton>
        </Link>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{ padding: 0, fontSize: "18px", fontWeight: 700 }}
        >
          <span className={`font-visby  text-primaryWhite `}>SERVICES</span>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <Link href={"/blockchain-projects"} onClick={handleClose}>
              <TextButton color="black">Blockchain Projects</TextButton>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href={"/contamy-nation"} onClick={handleClose}>
              <TextButton color="black">Contamy Nation</TextButton>
            </Link>
          </MenuItem>
        </Menu>
        <a href={"#contact-us"}>
          <TextButton>Contact us</TextButton>
        </a>
        <Image src={Search} alt={"search"} />
      </div>
    </header>
  );
}
