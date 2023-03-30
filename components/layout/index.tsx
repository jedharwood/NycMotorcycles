import { Header } from '../header'
import { ReactNode } from 'react'
import { Footer } from '../footer'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="md:px-6 h-full w-full bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="py-6 sm:p-6 max-w-6xl mx-auto bg-stone-600 bg-opacity-60">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
