import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'
import { HeadElement } from '@/components/head-element/head-element'
import Button from '@/components/button/button'
import InputField from '@/components/form-input/form-input'

const ContactPage: FC = (): JSX.Element => {
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
            <InputField
              type='text-area'
              placeholder={'pg.contact.place-holder.message'}
              name='message'
              register={register}
              error={errors.message}                    
              label={'pg.contact.label.message'}
            />
            <Button type='submit' text='pg.contact.send-button' />
          </form>
      </main>
    </>
  )
}

export default ContactPage
