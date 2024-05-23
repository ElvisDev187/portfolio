"use client"
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { DM_Sans } from 'next/font/google';
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
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected ? 'text-white' : 'text-gray-500 hover:text-gray-900'
      } relative rounded-md px-2 py-1 text-sm font-medium transition-colors`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: 'spring', duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-md linear-h"
        ></motion.span>
      )}
    </button>
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