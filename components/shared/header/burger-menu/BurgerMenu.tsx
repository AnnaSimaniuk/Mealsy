"use client";

import BurgerIcon from "@/assets/icons/BurgerIcon";
import LogoIcon from "@/assets/icons/LogoIcon";
import Link from "next/link";
import { useState } from "react";
import BurgerMenuContent from "@/components/shared/header/burger-menu/burger-menu-content/BurgerMenuContent";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={"flex justify-between items-center md:hidden"}>
      <Link href={"/"}>
        <LogoIcon className={"w-[72px]"} />
      </Link>
      <div onClick={() => setIsOpen(true)}>
        <BurgerIcon className={"cursor-pointer"} />
      </div>
      <BurgerMenuContent setIsOpen={setIsOpen} isOpen={isOpen} />
    </nav>
  );
};

export default BurgerMenu;
