import React, { PropsWithChildren } from 'react'

function TitleSection({children}:PropsWithChildren) {
  return (
    <h1 className="text-center font-bold text-[48px] dark:text-headingDark text-heading">{children}</h1>
  )
}

export default TitleSection
