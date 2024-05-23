import React from "react";
import { ModeToggle } from "./toggle-theme";
import { Icons } from "@/components/icons";
import ButtonShapeTabs from "@/components/syntaxui/tabs";
function Nav() {
  return (
    <nav className="flex items-center justify-between w-full">
      <div className="w-[20%]">
        <h1 className="">Logo</h1>
      </div>
      <div className="flex items-center justify-between gap-5">
        <ButtonShapeTabs/>
        <ModeToggle />
        <div className="flex gap-3">
          <Icons.github className="text-[#666666] dark:text-lightContent" />
          <Icons.twitter className="text-[#666666] dark:text-lightContent" />
          <Icons.linkedin className="text-[#666666] dark:text-lightContent" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
