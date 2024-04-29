import Link from 'next/link'
import { useIntl } from 'react-intl'

type LinkButtonProps = {
  text: string
  href: string
  type: 'anchor' | 'router-link'
}

export const LinkButton = ({
  text,
  href,
  type,
}: LinkButtonProps): JSX.Element => {
  const intl = useIntl()

  const button: JSX.Element = (
    <button
      type='button'
      className='rounded-md px-6 py-2 bg-teal-700 hover:bg-teal-500 text-lg'
    >
      {intl.formatMessage({
        id: text,
      })}
    </button>
  )

  const linkButton = () => {
    return type === 'anchor' ? (
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {button}
      </a>
    ) : type === 'router-link' ? (
      <Link href={href}>{button}</Link>
    ) : (
      <></>
    )
  }

  return <div className='flex justify-center'>{linkButton()}</div>
}
