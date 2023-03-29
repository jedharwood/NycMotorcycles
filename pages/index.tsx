import Head from 'next/head'
import { TextDisplay } from '@/components/text-display'
import { useIntl } from 'react-intl'
import { LinkButton } from '@/components/link-button'

export default function Home() {
  const intl = useIntl()

  const quoteContactButton: JSX.Element = (
    <LinkButton
      text={intl.formatMessage({
        id: 'page.home.section-one.button',
      })}
      href="/contact"
      type="router-link"
    />
  )

  const downloadDocumentsButton: JSX.Element = (
    <LinkButton
      text={intl.formatMessage({
        id: 'page.home.section-four.button',
      })}
      href="/download"
      type="router-link"
    />
  )

  const contactButton: JSX.Element = (
    <LinkButton
      text={intl.formatMessage({
        id: 'page.home.section-thirteen.button',
      })}
      href="/contact"
      type="router-link"
    />
  )

  const desirableModelList: string[] = [
    'page.home.section-two.list-one',
    'page.home.section-two.list-two',
    'page.home.section-two.list-three',
    'page.home.section-two.list-four',
    'page.home.section-two.list-five',
    'page.home.section-two.list-six'
  ]

  const soldExampleList: string[] =[
    'page.home.section-six.list-one',
    'page.home.section-six.list-two',
    'page.home.section-six.list-three',
    'page.home.section-six.list-four',
    'page.home.section-six.list-five',
    'page.home.section-six.list-six'
  ]

  const buildList = (listItems: string[]): JSX.Element => {
    return (
      <ul className="pl-4 list-disc">
        {listItems.map((listItem, idx) => (
          <li key={idx}>
            {intl.formatMessage({
              id: listItem,
            })}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <>
      <Head>
        <title>New York City Motorcycles</title>
        <meta
          name="description"
          content="The website for New York City Motorcycles"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="space-y-6">
        <TextDisplay
          title={intl.formatMessage({
            id: 'page.home.section-one.title',
          })}
          childElement={quoteContactButton}
        />
        <TextDisplay
          title={intl.formatMessage({
            id: 'page.home.section-two.title',
          })}
          textContent={[
            intl.formatMessage({
              id: 'page.home.section-two.text-one',
            }),
            intl.formatMessage({
              id: 'page.home.section-two.text-two',
            }),
          ]}
          childElement={buildList(desirableModelList)}
        />
        <TextDisplay
          title={intl.formatMessage({
            id: 'page.home.section-three.title',
          })}
          textContent={[
            intl.formatMessage({
              id: 'page.home.section-three.text-one',
            }),
          ]}
        />
        <TextDisplay
          title={intl.formatMessage({
            id: 'page.home.section-four.title',
          })}
          textContent={[
            intl.formatMessage({
              id: 'page.home.section-four.text-one',
            }),
            intl.formatMessage({
              id: 'page.home.section-four.text-two',
            }),
            intl.formatMessage({
              id: 'page.home.section-four.text-three',
            }),
          ]}
          childElement={downloadDocumentsButton}
        />
        <TextDisplay
          title={intl.formatMessage({
            id: 'page.home.section-five.title',
          })}
          textContent={[
            intl.formatMessage({
              id: 'page.home.section-five.text-one',
            }),
          ]}
        />
        <TextDisplay
          title={intl.formatMessage({
            id: 'page.home.section-six.title',
          })}
          childElement={buildList(soldExampleList)}
        />
        <TextDisplay
          title={intl.formatMessage({
            id: 'page.home.section-seven.title',
          })}
          textContent={[intl.formatMessage({
            id: 'page.home.section-seven.text-one',
          }), intl.formatMessage({
            id: 'page.home.section-seven.text-two',
          }), intl.formatMessage({
            id: 'page.home.section-seven.text-three',
          })]}
        />
        <TextDisplay
          title={intl.formatMessage({
            id: 'page.home.section-eight.title',
          })}
          textContent={[intl.formatMessage({
            id: 'page.home.section-eight.text-one',
          })]}
        />
        <TextDisplay
          title={intl.formatMessage({
            id: 'page.home.section-nine.title',
          })}
          textContent={[intl.formatMessage({
            id: 'page.home.section-nine.text-one',
          })]}
        />
        <TextDisplay
          title={intl.formatMessage({
            id: 'page.home.section-ten.title',
          })}
          textContent={[intl.formatMessage({
            id: 'page.home.section-ten.text-one',
          }), intl.formatMessage({
            id: 'page.home.section-ten.text-two',
          })]}
        />
        <TextDisplay
          title={intl.formatMessage({
            id: 'page.home.section-eleven.title',
          })}
          textContent={[intl.formatMessage({
            id: 'page.home.section-eleven.text-one',
          })]}
        />
        <TextDisplay
          title={intl.formatMessage({
            id: 'page.home.section-twelve.title',
          })}
          textContent={[intl.formatMessage({
            id: 'page.home.section-twelve.text-one',
          }), intl.formatMessage({
            id: 'page.home.section-twelve.text-two',
          })]}
        />
        <TextDisplay
          title={intl.formatMessage({
            id: 'page.home.section-thirteen.title',
          })}
          textContent={[intl.formatMessage({
            id: 'page.home.section-thirteen.text-one',
          })]}
          childElement={contactButton}
        />
      </main>
    </>
  )
}
