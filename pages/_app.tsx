import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@/components/layout'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import en from '../languages/en.json'
import jp from '../languages/jp.json'
import { AppContext } from '../context/app-context';
import { useAppContext } from '../context/use-app-context';

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
  const [state, actions] = useAppContext();
  const { locale = 'en' } = useRouter()

  return (
    <AppContext.Provider value={{ ...state, ...actions }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IntlProvider>
    </AppContext.Provider>
  )
}
