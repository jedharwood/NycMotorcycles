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
  const classes: string = 'bg-stone-50 bg-opacity-90 text-gray-900 rounded-md w-full p-2.5'
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