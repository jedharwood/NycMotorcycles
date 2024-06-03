import nycmcLogo from 'public/svgs/nycmc-logo.svg';
import { FormattedMessage, useIntl } from 'react-intl';

const AuctionCard = ({
  title,
  url,
  image,
  bidders,
  timeRemaining,
  currentPrice,
  promptDecisionPrice,
}: ActiveAuction): JSX.Element => {
  const intl = useIntl();
  const imageSource = image.imageSrc || nycmcLogo;
  const imageAltText =
    image.imageAlt || intl.formatMessage({ id: 'common.img.place-holder.alt' });

  const timeRemainingValue = (): string | undefined => {
    if (!timeRemaining?.time) return undefined;

    let unit: string;
    switch (timeRemaining.unit) {
      case 'days':
        unit = 'comp.auction-card.time-unit.days';
        break;
      case 'hours':
        unit = 'comp.auction-card.time-unit.hours';
        break;
      case 'minutes':
        unit = 'comp.auction-card.time-unit.minutes';
        break;
      default:
        unit = '';
    }

    return `${timeRemaining.time} ${intl.formatMessage({ id: unit })}`;
  };

  const renderTableRow = (
    label: string,
    value: string | undefined
  ): JSX.Element | null => {
    if (!value) return null;

    return (
      <tr className='text-sm hover:underline sm:text-lg'>
        <td className='pr-4 sm:opacity-80'>
          <FormattedMessage id={label} />
        </td>
        <td>{value}</td>
      </tr>
    );
  };

  return (
    <article className='card-hover grid w-full gap-4 rounded-md bg-stone-600 bg-opacity-90 py-4 px-6 text-stone-50 hover:bg-opacity-100 sm:grid-cols-3'>
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='relative h-fit rounded-md bg-gray-500 sm:col-span-1'
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
          className='text-xl font-medium hover:underline hover:opacity-100 md:opacity-80'
        >
          {title}
        </a>
        <table className='mt-4 w-full table-auto'>
          <tbody>
            {renderTableRow(
              'comp.auction-card.table-label.current-price',
              currentPrice
            )}
            {renderTableRow(
              'comp.auction-card.table-label.prompt-price',
              promptDecisionPrice
            )}
            {renderTableRow(
              'comp.auction-card.table-label.time-remaining',
              timeRemainingValue()
            )}
            {renderTableRow('comp.auction-card.table-label.bidders', bidders)}
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default AuctionCard;
