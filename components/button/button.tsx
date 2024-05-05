import { useIntl } from 'react-intl'

type ButtonProps = {
  type: 'button' | 'submit'
  text: string,
  disabled?: boolean
  onClick?: () => void
}

const Button = ({ 
  type, 
  text, 
  disabled, 
  onClick 
}: ButtonProps): JSX.Element => {
  const intl = useIntl()
  const classes = disabled 
    ? 'rounded-md px-6 py-2 bg-teal-700 text-lg'
    : 'rounded-md px-6 py-2 bg-teal-700 text-lg hover:bg-teal-500'

  return (
    <div className='flex justify-center'>
      <button
        type={type}
        className={classes}
        disabled={disabled}
        onClick={onClick}
      >
        {intl.formatMessage({
            id: text,
        })}
      </button>
    </div>
  )
}

export default Button
