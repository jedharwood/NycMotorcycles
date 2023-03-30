import { TextDisplay } from '@/components/text-display'
import { useIntl } from 'react-intl'
import { LinkButton, LinkButtonProps } from '@/components/link-button'
import { HeadElement } from '@/components/head-element'
import { routes } from '@/utilities/resource-utilities'

export default function Home() {
  const intl = useIntl()

  const desirableModelList: string[] = [
    'page.home.section-2.list-1',
    'page.home.section-2.list-2',
    'page.home.section-2.list-3',
    'page.home.section-2.list-4',
    'page.home.section-2.list-5',
    'page.home.section-2.list-6',
  ]

  const soldExampleList: string[] = [
    'page.home.section-6.list-1',
    'page.home.section-6.list-2',
    'page.home.section-6.list-3',
    'page.home.section-6.list-4',
    'page.home.section-6.list-5',
    'page.home.section-6.list-6',
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

  const buildLinkButton = (props: LinkButtonProps): JSX.Element => {
    const linkButtonProps: LinkButtonProps = {
      ...props,
      text: props.text,
    }
    return <LinkButton {...linkButtonProps} />
  }

  return (
    <>
      <HeadElement
        pageTitle="page.home.head.meta.title"
        content="page.home.head.meta.content"
      />
      <main className="space-y-6">
        <TextDisplay
          title="page.home.section-1.title"
          childElement={buildLinkButton({
            text: 'page.home.section-1.button',
            href: routes.contact,
            type: 'router-link',
          })}
        />
        <TextDisplay
          title="page.home.section-2.title"
          textContent={[
            'page.home.section-2.text-1',
            'page.home.section-2.text-2',
          ]}
          childElement={buildList(desirableModelList)}
        />
        <TextDisplay
          title="page.home.section-3.title"
          textContent={['page.home.section-3.text-1']}
        />
        <TextDisplay
          title="page.home.section-4.title"
          textContent={[
            'page.home.section-4.text-1',
            'page.home.section-4.text-2',
            'page.home.section-4.text-3',
          ]}
          childElement={buildLinkButton({
            text: 'page.home.section-4.button',
            href: routes.download,
            type: 'router-link',
          })}
        />
        <TextDisplay
          title="page.home.section-5.title"
          textContent={['page.home.section-5.text-1']}
        />
        <TextDisplay
          title="page.home.section-6.title"
          childElement={buildList(soldExampleList)}
        />
        <TextDisplay
          title="page.home.section-7.title"
          textContent={[
            'page.home.section-7.text-1',
            'page.home.section-7.text-2',
            'page.home.section-7.text-3',
          ]}
        />
        <TextDisplay
          title="page.home.section-8.title"
          textContent={['page.home.section-8.text-1']}
        />
        <TextDisplay
          title="page.home.section-9.title"
          textContent={['page.home.section-9.text-1']}
        />
        <TextDisplay
          title="page.home.section-10.title"
          textContent={[
            'page.home.section-10.text-1',
            'page.home.section-10.text-2',
          ]}
        />
        <TextDisplay
          title="page.home.section-11.title"
          textContent={['page.home.section-11.text-1']}
        />
        <TextDisplay
          title="page.home.section-12.title"
          textContent={[
            'page.home.section-12.text-1',
            'page.home.section-12.text-2',
          ]}
        />
        <TextDisplay
          title="page.home.section-13.title"
          textContent={['page.home.section-13.text-1']}
          childElement={buildLinkButton({
            text: 'page.home.section-13.button',
            href: routes.contact,
            type: 'router-link',
          })}
        />
      </main>
    </>
  )
}
