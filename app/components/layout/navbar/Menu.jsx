"use client";

import { useState } from "react";
import Image from "next/image";
import MenuList from "./MenuList";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div onClick={handleClick} className="flex items-center flex-col">
        <Image
          src={
            "https://res.cloudinary.com/dgiqb0ipg/image/upload/v1738593293/Hamburger_icon.svg_gkelcv.png"
          }
          alt="Menu"
          width={100}
          height={100}
        />
        <MenuList isOpen={isOpen} handleClik={handleClick} />
      </div>
    </>
  );
};

export default Menu;
