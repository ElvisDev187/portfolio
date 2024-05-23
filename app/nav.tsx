import React from "react";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./toggle-theme";
import { Icons } from "@/components/icons";
const dm_sans = DM_Sans({ weight: ["400", "700"], subsets: ["latin"] });
function Nav() {
  return (
    <nav className="flex items-center justify-between w-full">
      <div className="w-[20%]">
        <h1 className="">Logo</h1>
      </div>
      <div className="flex items-center justify-between gap-5">
        <ul
          className={cn(
            "flex list-none justify-around gap-8 items-center font-medium text-[#666666] dark:text-lightContent",
            dm_sans.className
          )}
        >
          <li>Home</li>
          <li>About</li>
          <li>Tech Stack</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
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
