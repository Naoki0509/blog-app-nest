import React, { ReactNode } from 'react'

import { Header } from './header'

// childrenを受け取る
type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-8">
      <Header />
      <main>{children}</main>
    </div>
  )
}
