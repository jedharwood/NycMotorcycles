import nycmcLogo from 'public/svgs/nycmc-logo.svg'
import { useIntl } from 'react-intl'

export const AuctionCard = ({
  title,
  url,
  image,
  bidders,
  timeRemaining,
  currentPrice,
  promptDecisionPrice,
}: ActiveAuction): JSX.Element => {
  const intl = useIntl()
  const imageSource = image.imageSrc.length ? image.imageSrc : nycmcLogo
  const imageAltText = image.imageAlt.length
    ? image.imageAlt
    : intl.formatMessage({ id: 'common.img.placeholder.alt' })

  const timeRemainingValue = (): string | undefined => {
    if (!timeRemaining?.time) return undefined

    let unit: string
    switch (timeRemaining.unit) {
      case 'days':
        unit = 'comp.auction-card.time-unit.days'
        break
      case 'hours':
        unit = 'comp.auction-card.time-unit.hours'
        break
      case 'minutes':
        unit = 'comp.auction-card.time-unit.minutes'
        break
      default:
        unit = ''
    }

    return `${timeRemaining.time} ${intl.formatMessage({ id: unit })}`
  }

  const tableRow = (label: string, value: string | undefined): JSX.Element => {
    return value === undefined ? (
      <></>
    ) : (
      <tr className='hover:underline text-sm sm:text-lg'>
        <td className='pr-4 sm:opacity-80'>
          {intl.formatMessage({
            id: label,
          })}
        </td>
        <td>{value}</td>
      </tr>
    )
  }

  return (
    <article className='bg-stone-600 bg-opacity-90 w-full py-4 px-6 rounded-md text-stone-50 grid sm:grid-cols-3 gap-4 shadow-lg'>
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='relative sm:col-span-1 bg-gray-500 rounded-md h-fit'
      >
        <img
          src={imageSource}
          alt={imageAltText}
          className='w-full rounded-md hover:opacity-70'
        />
      </a>
      <div className='sm:col-span-2'>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='font-medium md:opacity-80 hover:opacity-100 hover:underline text-xl'
        >
          {title}
        </a>
        <table className='mt-4 w-full table-auto'>
          <tbody>
            {tableRow(
              'comp.auction-card.table-label.current-price',
              currentPrice,
            )}
            {tableRow(
              'comp.auction-card.table-label.prompt-price',
              promptDecisionPrice,
            )}
            {tableRow(
              'comp.auction-card.table-label.time-remaining',
              timeRemainingValue(),
            )}
            {tableRow('comp.auction-card.table-label.bidders', bidders)}
          </tbody>
        </table>
      </div>
    </article>
  )
}
