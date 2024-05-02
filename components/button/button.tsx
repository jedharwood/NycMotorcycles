import { useIntl } from 'react-intl'

type ButtonProps = {
  type: 'button' | 'submit'
  text: string
}

const Button = ({ type, text }: ButtonProps): JSX.Element => {
  const intl = useIntl()

  return (
    <div className='flex justify-center'>
      <button
        type={type}
        className='rounded-md px-6 py-2 bg-teal-700 hover:bg-teal-500 text-lg'
      >
        {intl.formatMessage({
            id: text,
        })}
      </button>
    </div>
  )
}

export default Button
