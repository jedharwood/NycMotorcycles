import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'
import { zodResolver } from '@hookform/resolvers/zod'
import { z, ZodType } from 'zod' 
import { HeadElement } from '@/components/head-element/head-element'
import Button from '@/components/button/button'
import InputField from '@/components/form-input/form-input'

const ContactPage: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const intl = useIntl()
  const requiredErrorMessage: string = intl.formatMessage({ id: 'pg.contact.validation.required' })
  const contactFormSchema: ZodType<ContactFormData> = z
    .object(
    {
      email: z
        .string()
        .email(intl.formatMessage({ id: 'pg.contact.validation.email' })),
      senderName: z
        .string()
        .min(1, { message: requiredErrorMessage }),
      subject: z
        .string()
        .min(1, { message: requiredErrorMessage }),
      message: z
        .string()
        .min(1, { message: requiredErrorMessage }) 
    }
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true) 
    // spinner?
    const response = await fetch('/api/mailer', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      setIsLoading(false)
      setIsSuccess(true)
      reset()
      // display success message
      // enable button
    } else {
      // set is loading false
      // retain form data
      // display failure message
    }
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
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6' noValidate>
            <InputField
              type='text'
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
            <InputField
              type='text-area'
              placeholder={'pg.contact.place-holder.message'}
              name='message'
              register={register}
              error={errors.message}                    
              label={'pg.contact.label.message'}
            />
            <Button type='submit' text='pg.contact.send-button' disabled={isLoading} />
          </form>
      </main>
    </>
  )
}

export default ContactPage

