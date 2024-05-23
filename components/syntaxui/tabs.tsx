"use client"
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { DM_Sans } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react'
const dm_sans = DM_Sans({ weight: ["400", "700"], subsets: ["latin"] });

const tabs = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']

interface TabProps {
  text: string
  selected: boolean
  setSelected: (text: string) => void
}

const Tab = ({ text, selected, setSelected }: TabProps) => {
  return (
    <Link
      href={`#${text}`}
      onClick={() => setSelected(text)}
      className={`${
        selected ? 'text-white' : 'group'
      } relative rounded-md px-2 py-1 text-sm font-medium transition-colors`}
    >
      <span className="relative z-10 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-[#13B0F5] from-[3%] to-[#E70FAA] ">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: 'spring', duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-md linear-h"
        ></motion.span>
      )}
    </Link>
  )
}

const ButtonShapeTabs = () => {
  const [selected, setSelected] = useState<string>(tabs[0])
  return (
    <div className={cn(
        "lg:flex hidden list-none justify-around gap-8 items-center font-medium text-[#666666] dark:text-lightContent",
        dm_sans.className
      )}>
      {tabs.map((tab, index) => (
        <Tab
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  )
}

export default ButtonShapeTabs