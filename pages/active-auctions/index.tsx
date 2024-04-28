import { AuctionCard } from '@/components/auction-card/auction-card'
import { FC, useEffect, useState } from 'react'
import { routes } from '../../utilities/resource-utilities'
import { TextDisplay } from '@/components/text-display/text-display'
import { Spinner } from '@/components/spinner'
import { LinkButton } from '@/components/link-button'
import { HeadElement } from '@/components/head-element'

const ActiveAuctionPage: FC = (): JSX.Element => {
  const [activeAuctions, setActiveAuctions] = useState<ActiveAuction[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [status, setStatus] = useState<number>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/auction-scraper')
      const data = await response.json()

      setStatus(response.status)
      setActiveAuctions(data.activeAuctions)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const auctionDisplay = (): JSX.Element => {
    if (isLoading) return <></>

    const yahooAuctionLinkButton: JSX.Element = (
      <LinkButton
        text='pg.active-auctions.yahoo-auctions-button'
        href={'https://auctions.yahoo.co.jp/seller/lazzamoto?'}
        type='anchor'
      />
    )

    if (status === 403) {
      return (<TextDisplay
        title='pg.active-auctions.error.title'
        textContent={['pg.active-auctions.unauthorised.body']}
        childElement={yahooAuctionLinkButton}
        childElementPosition='bottom'
      />)
    }

    if (status === 500) {
      return (<TextDisplay
        title='pg.active-auctions.error.title'
        textContent={['pg.active-auctions.error.body']}
        childElement={<LinkButton
          text='pg.active-auctions.contact-button'
          href={routes.contact}
          type='router-link'
        />}
        childElementPosition='bottom'
      />)
    }

    return !activeAuctions.length ? (
      <TextDisplay
        title='pg.active-auctions.no-auctions.title'
        textContent={['pg.active-auctions.no-auctions.body']}
        childElement={yahooAuctionLinkButton}
        childElementPosition='bottom'
      />
    ) : (
      <ul className='space-y-6'>
        {activeAuctions.map((auction) => {
          return (
            <li key={auction.title}>
              <AuctionCard {...auction} />
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <>
      <HeadElement
        pageTitle='pg.active-auctions.head.meta.title'
        content='pg.active-auctions.head.meta.content'
      />
      <main>
        <Spinner loading={isLoading} />
        {auctionDisplay()}
      </main>
    </>
  )
}

export default ActiveAuctionPage
