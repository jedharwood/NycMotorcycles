import Link from 'next/link'
import Button from '../button/button'

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
  const button = <Button type='button' text={text} />

  const linkButton = () => {
    return type === 'anchor' ? (
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {button}
      </a>
    ) : (
      <Link href={href}>{button}</Link>
    )
  }

  return <div className='flex justify-center'>{linkButton()}</div>
}
