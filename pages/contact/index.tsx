import { FC } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { HeadElement } from '@/components/head-element/head-element'
import Button from '@/components/button/button'

const ContactPage: FC = (): JSX.Element => {
  const intl = useIntl()
  const handleSubmit = (e: any): void => {
    e.preventDefault()
    console.log('Form Submited')
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
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='space-y-2'>
              <label htmlFor='email'>
                <FormattedMessage id='pg.contact.label.email' />
               </label>
              <input 
                type='email' 
                id='email' 
                className='bg-stone-50 bg-opacity-90 text-gray-900 rounded-md w-full p-2.5'                 
                placeholder={intl.formatMessage({ id: 'pg.contact.place-holder.email' })} 
                required 
              />
            </div>
            <div className='space-y-2'>
              <label htmlFor='name'>
                <FormattedMessage id='pg.contact.label.name' />
              </label>
              <input 
                type='text' 
                id='name' 
                className='bg-stone-50 bg-opacity-90 text-gray-900 rounded-md w-full p-2.5' 
                placeholder={intl.formatMessage({ id: 'pg.contact.place-holder.name' })}  
                // required 
              />
            </div>
            <div className='space-y-2'>
              <label htmlFor='subject'>
                <FormattedMessage id='pg.contact.label.subject' />
              </label>
              <input 
                type='text' 
                id='subject' 
                className='bg-stone-50 bg-opacity-90 text-gray-900 rounded-md w-full p-2.5' 
                placeholder={intl.formatMessage({ id: 'pg.contact.place-holder.subject' })}  
                // required 
              />
            </div>
            <div className='sm:col-span-2 space-y-2'>
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
