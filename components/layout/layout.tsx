import { ReactNode } from 'react'
import { Header } from '../header/header'
import Footer from '../footer/footer'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div id="layout-outer" className="md:px-6 w-full bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
      <div id="layout-inner" className="py-6 sm:p-6 max-w-6xl mx-auto bg-stone-600 bg-opacity-60">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
