import Head from 'next/head'
import { useIntl } from 'react-intl'

type HeadElementProps = {
  pageTitle: string
  content: string
}

export const HeadElement = ({ pageTitle, content }: HeadElementProps) => {
  const intl = useIntl()
  const metaContent: string = intl.formatMessage({ id: content })
  const metaBrandList: string = intl.formatMessage({ id: 'common.meta.brands' })

  return (
    <Head>
      <title>{intl.formatMessage({ id: pageTitle })}</title>
      <meta name="description" content={`${metaContent} ${metaBrandList}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
