import Head from 'next/head';

type HeadElementProps = {
  metaTitle: string;
  metaContent: string;
  metaBrandList: string
};

export const HeadElement = ({
  metaTitle,
  metaContent,
  metaBrandList
}: HeadElementProps) => {
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name='description' content={`${metaContent} ${metaBrandList}`} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};
