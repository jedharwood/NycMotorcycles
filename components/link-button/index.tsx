import Link from 'next/link'

type ButtonProps = {
  text: string
  href: string
  type: 'anchor' | 'router-link'
}

export const LinkButton = ({ text, href, type }: ButtonProps): JSX.Element => {
  const button: JSX.Element = (
    <button
      type="button"
      className="rounded-md px-6 py-2 bg-teal-700 hover:bg-teal-500 text-lg"
    >
      {text}
    </button>
  )

  const linkButton = () => {
    return type === 'anchor' ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {button}
      </a>
    ) : type === 'router-link' ? (
      <Link href={href}>{button}</Link>
    ) : (
      <></>
    )
  }

  return <div className="flex justify-center">{linkButton()}</div>
}
