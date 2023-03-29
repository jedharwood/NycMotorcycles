import { AuctionCard } from '@/components/auction-card'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { yahooAuctionProfilePage } from '../../utilities/resource-utilities'
import { TextDisplay } from '@/components/text-display'
import { Spinner } from '@/components/spinner'
import { useIntl } from 'react-intl'
import { LinkButton } from '@/components/link-button'

export default function Home() {
  const intl = useIntl()
  const [activeAuctions, setActiveAuctions] = useState<ActiveAuction[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/auction-scraper')
      const data = await response.json()
      setActiveAuctions(data.activeAuctions)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const auctionDisplay = (): JSX.Element => {
    if (isLoading) return <></>

    const yahooAuctionLinkButton: JSX.Element = (
      <LinkButton
        text={intl.formatMessage({
          id: 'page.active-auctions.yahoo-auctions-button',
        })}
        href={yahooAuctionProfilePage}
        type="anchor"
      />
    )

    return !activeAuctions.length ? (
      <TextDisplay
        title="page.active-auctions.no-auctions.title"
        textContent={['page.active-auctions.no-auctions.body']}
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
      <Head>
        <title>New York City Motorcycles</title>
        <meta
          name="description"
          content="The website for New York City Motorcycles"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Spinner loading={isLoading} />
        {auctionDisplay()}
      </main>
    </>
  )
}
