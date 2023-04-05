import { useIntl } from 'react-intl'

type TitleBlockProps = {
  titles: string[]
}

export const TitleBlock = ({ titles }: TitleBlockProps): JSX.Element => {
  const intl = useIntl()

  return (
    <section className="bg-stone-600 bg-opacity-90 w-full py-4 px-6 rounded-md text-stone-50 shadow-lg space-y-2">
      {titles.map((title, idx) => (
        <h2
          key={idx}
          className="flex justify-center font-medium text-xl md:text-2xl opacity-80"
        >
          {intl.formatMessage({
            id: title,
          })}
        </h2>
      ))}
    </section>
  )
}
