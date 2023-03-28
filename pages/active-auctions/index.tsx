import { AuctionCard } from '@/components/auction-card'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [activeAuctions, setActiveAuctions] = useState<ActiveAuction[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/auction-scraper')
      const data = await response.json()
      setActiveAuctions(data.activeAuctions)
    }
    fetchData()
  }, [])

  const auctionDisplay = (): JSX.Element => {
    return !activeAuctions ? (
      <p>No auctions</p>
    ) : (
      <ul className="space-y-6">
        {activeAuctions.map((auction) => {
          return (
            <li key={auction.title}>
              <AuctionCard {...auction}/>
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
      <main>{auctionDisplay()}</main>
    </>
  )
}
