import instagramIcon from 'assets/svgs/instagram-icon.svg'
import Image from 'next/image'

export const Footer = (): JSX.Element => {
  const scrollToTop = (): void => {
    if (typeof window === 'undefined') return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="grid text-stone-50 tracking-widest font-light space-y-4 mt-6">
      <button
        type="button"
        onClick={scrollToTop}
        className="opacity-80 hover:opacity-100 hover:underline"
      >
        Scroll to top?
      </button>
      <a
        href="https://www.instagram.com/newyorkcitymotorcycles/"
        className="flex justify-center opacity-80 hover:opacity-100"
      >
        <Image
          src={instagramIcon}
          alt="Instagram logo"
          width={50}
          height={50}
          priority
        />
      </a>
      <h3 className="flex justify-center text-sm md:text-md">
        SHONAN COAST, JAPAN | LOS ANGELES
      </h3>
      <h4 className="flex justify-center text-xs md:text-sm">
        Vintage Motorcycles, Inc | All Rights Reserved
      </h4>
    </footer>
  )
}
