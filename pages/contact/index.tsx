import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'
import { HeadElement } from '@/components/head-element/head-element'
import Button from '@/components/button/button'
import InputField from '@/components/form-input/form-input'

const ContactPage: FC = (): JSX.Element => {
  const intl = useIntl()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log('SUCCESS', data);
  }

  return (
    <>
      <HeadElement
        pageTitle='pg.contact.head.meta.title'
        content='pg.contact.head.meta.content'
      />
      <main className='bg-stone-600 bg-opacity-90 w-full py-4 px-6 rounded-md text-stone-50 shadow-lg'>
          <h2 className='text-center font-medium text-xl md:text-2xl mb-4 opacity-80'>
            <FormattedMessage id='pg.contact.title' />
          </h2>
          <p className='text-center mb-4'>
            <FormattedMessage id='pg.contact.text' />
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <InputField
              type='email'
              placeholder={'pg.contact.place-holder.email'}
              name='email'
              register={register}
              error={errors.email}                    
              label={'pg.contact.label.email'}
            />
            <InputField
              type='text'
              placeholder={'pg.contact.place-holder.sender-name'}
              name='senderName'
              register={register}
              error={errors.senderName}                    
              label={'pg.contact.label.sender-name'}
            />
            <InputField
              type='text'
              placeholder={'pg.contact.place-holder.subject'}
              name='subject'
              register={register}
              error={errors.subject}                    
              label={'pg.contact.label.subject'}
            />
            <div className='space-y-2'>
              <label htmlFor='message'>
                <FormattedMessage id='pg.contact.label.message' />
              </label>
              <textarea 
                id='message' 
                rows={5} 
                className='bg-stone-50 bg-opacity-90 text-gray-900 rounded-md w-full p-2.5' 
                placeholder={intl.formatMessage({ id: 'pg.contact.place-holder.message' })}
              />
            </div>
            <Button type='submit' text='pg.contact.send-button' />
          </form>
      </main>
    </>
  )
}

export default ContactPage
