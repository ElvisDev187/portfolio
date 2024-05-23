"use client"
import React from "react";
import { ModeToggle } from "./toggle-theme";
import { Icons } from "@/components/icons";
import ButtonShapeTabs from "@/components/syntaxui/tabs";
import MobileNav, { MenuToggle, useMobileNavState } from "./mobile-nav";
function Nav() {
  const { isOpen, toggleOpen } = useMobileNavState();
  return (
   <>
    <nav className="flex items-center justify-between z-50 ">
      <div className="lg:w-[20%]">
        <h1 className="">Logo</h1>
      </div>
      <div className="flex items-center justify-between gap-5">
        <ButtonShapeTabs/>
        <div className=" hidden lg:flex gap-3">
          <Icons.github className="text-[#666666] dark:text-lightContent" />
          <Icons.twitter className="text-[#666666] dark:text-lightContent" />
          <Icons.linkedin className="text-[#666666] dark:text-lightContent" />
        </div>
      <ModeToggle />
      <MenuToggle toggle={toggleOpen} />
      </div>
       
    </nav>
    <MobileNav isOpen={isOpen} toggleOpen={toggleOpen} />
    </>
  );
}

export default Nav;
