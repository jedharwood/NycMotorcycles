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

  return (
    <>
      <div className='space-y-2'>
        <label htmlFor={name}>
          <FormattedMessage id={label} />
        </label>
        <input
          type={type}
          placeholder={intl.formatMessage({ id: placeholder })}
          {...register(name)}
          className='bg-stone-50 bg-opacity-90 text-gray-900 rounded-md w-full p-2.5'
        />
      </div>
      {error && <span className=''>{error.message}</span>}
    </>
  )
}

export default InputField;