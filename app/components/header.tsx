import React from 'react'
import Nav from './nav'
import { cn } from '@/lib/utils'

function Header() {
  return (
    <header className={cn('lg:px-20 py-4 container backdrop-blur-sm  fixed  z-[100] top-0 left-0',{
      "dark:bg-white/15 bg-white/80": false
    })}>
       <Nav/>
    </header>
  )
}

export default Header
