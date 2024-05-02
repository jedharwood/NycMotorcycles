import { FormattedMessage, useIntl } from 'react-intl'

const InputField = ({
  type,
  placeholder,
  name,
  register,
  error,
  label
}: InputFieldProps): JSX.Element => {
  const intl = useIntl()
  const classes: string = `bg-stone-50 bg-opacity-90 rounded-md w-full p-2.5 text-gray-900 outline-none focus:ring focus:ring-offset hover:ring hover:ring-offset ${
    error 
    ? 'focus:ring-rose-400 hover:ring-rose-400' 
    : 'focus:ring-teal-500 hover:ring-teal-500'
  }`
  const placeholderText: string = intl.formatMessage({ id: placeholder })

  const input = type === 'text-area' ? (
    <textarea 
      rows={6} 
      placeholder={placeholderText}
      {...register(name)}
      className={classes}
    /> 
  ) : (
    <input
      type={type}
      placeholder={placeholderText}
      {...register(name)}
      className={classes}
    />
  )

  return (
    <>
      <div className='space-y-2'>
        <label htmlFor={name}>
          <FormattedMessage id={label} />
        </label>
        {input}
      </div>
      {error && <span className='text-xs text-rose-400'>{error.message}</span>}
    </>
  )
}

export default InputField;