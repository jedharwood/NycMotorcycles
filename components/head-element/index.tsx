import Head from 'next/head'
import { useIntl } from 'react-intl'

type HeadElementProps = {
  pageTitle: string
  content: string
}

export const HeadElement = ({ pageTitle, content }: HeadElementProps) => {
  const intl = useIntl()

  return (
    <Head>
      <title>{intl.formatMessage({ id: pageTitle })}</title>
      <meta name="description" content={intl.formatMessage({ id: content })} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
