import { AuctionCard } from '@/components/auction-card'
import { FC, useEffect, useState } from 'react'
import { yahooAuctionProfilePage } from '../../utilities/resource-utilities'
import { TextDisplay } from '@/components/text-display'
import { Spinner } from '@/components/spinner'
import { LinkButton } from '@/components/link-button'
import { HeadElement } from '@/components/head-element'

const ActiveAuctionPage: FC = (): JSX.Element => {
  const [activeAuctions, setActiveAuctions] = useState<ActiveAuction[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.API_BASE_URL}/auction-scraper`)
      const data = await response.json()
      setActiveAuctions(data.activeAuctions)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const auctionDisplay = (): JSX.Element => {
    if (isLoading) return <></>
console.log("APIURL", process.env.API_BASE_URL)
    const yahooAuctionLinkButton: JSX.Element = (
      <LinkButton
        text="pg.active-auctions.yahoo-auctions-button"
        href={yahooAuctionProfilePage}
        type="anchor"
      />
    )

    return !activeAuctions.length ? (
      <TextDisplay
        title="pg.active-auctions.no-auctions.title"
        textContent={['pg.active-auctions.no-auctions.body']}
        childElement={yahooAuctionLinkButton}
      />
    ) : (
      <ul className="space-y-6">
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
        pageTitle="pg.active-auctions.head.meta.title"
        content="pg.active-auctions.head.meta.content"
      />
      <main>
        <Spinner loading={isLoading} />
        {auctionDisplay()}
      </main>
    </>
  )
}

export default ActiveAuctionPage
