import Head from 'next/head';
import { useIntl } from 'react-intl';

type HeadElementProps = {
  metaTitle: string;
  content: string;
  bikeName?: string;
};

export const HeadElement = ({
  metaTitle,
  content,
  bikeName,
}: HeadElementProps) => {
  const intl = useIntl();
  const metaBrandList: string = intl.formatMessage({
    id: 'common.meta.brands',
  });
  const metaContent: string =
    bikeName === undefined
      ? intl.formatMessage({ id: content })
      : intl.formatMessage({ id: content }, { bike: bikeName });

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name='description' content={`${metaContent} ${metaBrandList}`} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};
