import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@/components/layout'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import en from '../languages/en.json'
import jp from '../languages/jp.json'

type Messages = {
  [key: string]: {
    [key: string]: string
  }
}

const messages: Messages = {
  en,
  jp,
}

export default function App({ Component, pageProps }: AppProps) {
  const { locale = 'en' } = useRouter()

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IntlProvider>
  )
}
