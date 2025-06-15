import { FC } from 'react';

import { useIntl } from 'react-intl';

import HeadElement from '@/components/head-element/head-element';
import Jumbotron from '@/components/jumbotron/jumbotron';
import LinkButton from '@/components/link-button/link-button';
import TextDisplay from '@/components/text-display/text-display';
import { BuildList } from '@/helpers/build-list';
import routes from '@/utilities/routes';

import { images as img } from '../public/images/home';

const HomePage: FC = (): JSX.Element => {
    const intl = useIntl();

    const desirableModelList: JSX.Element = BuildList({
        listItems: [
            intl.formatMessage({ id: 'pg.home.sect-2.list-1' }),
            intl.formatMessage({ id: 'pg.home.sect-2.list-2' }),
            intl.formatMessage({ id: 'pg.home.sect-2.list-3' }),
            intl.formatMessage({ id: 'pg.home.sect-2.list-4' }),
            intl.formatMessage({ id: 'pg.home.sect-2.list-5' }),
            intl.formatMessage({ id: 'pg.home.sect-2.list-6' }),
        ],
    });

    const soldExampleList: JSX.Element = BuildList({
        listItems: [
            intl.formatMessage({ id: 'pg.home.sect-6.list-1' }),
            intl.formatMessage({ id: 'pg.home.sect-6.list-2' }),
            intl.formatMessage({ id: 'pg.home.sect-6.list-3' }),
            intl.formatMessage({ id: 'pg.home.sect-6.list-4' }),
            intl.formatMessage({ id: 'pg.home.sect-6.list-5' }),
            intl.formatMessage({ id: 'pg.home.sect-6.list-6' }),
        ],
    });

    return (
        <>
            <HeadElement
                metaTitle={intl.formatMessage({
                    id: 'pg.home.head.meta.title',
                })}
                metaContent={intl.formatMessage({
                    id: 'pg.home.head.meta.content',
                })}
                metaBrandList={intl.formatMessage({ id: 'common.meta.brands' })}
            />
            <main className='space-y-6'>
                <Jumbotron
                    image={img.racing}
                    legend={intl.formatMessage({ id: 'pg.home.jumbotron' })}
                    altText={intl.formatMessage({ id: img.racing.altText })}
                />
                <TextDisplay
                    title={intl.formatMessage({ id: 'pg.home.sect-1.title' })}
                    childElement={
                        <LinkButton
                            text={intl.formatMessage({
                                id: 'pg.home.sect-1.button',
                            })}
                            href={routes.contact}
                            type='router-link'
                            id='home-page-contact-button-1'
                        />
                    }
                    childElementPosition='under-title'
                />
                <TextDisplay
                    title={intl.formatMessage({ id: 'pg.home.sect-2.title' })}
                    textContent={[
                        intl.formatMessage({ id: 'pg.home.sect-2.text-1' }),
                        intl.formatMessage({ id: 'pg.home.sect-2.text-2' }),
                    ]}
                    childElement={desirableModelList}
                    childElementPosition='under-title'
                />
                <TextDisplay
                    title={intl.formatMessage({ id: 'pg.home.sect-3.title' })}
                    textContent={[
                        intl.formatMessage({ id: 'pg.home.sect-3.text-1' }),
                    ]}
                />
                <TextDisplay
                    title={intl.formatMessage({ id: 'pg.home.sect-4.title' })}
                    textContent={[
                        intl.formatMessage({ id: 'pg.home.sect-4.text-1' }),
                        intl.formatMessage({ id: 'pg.home.sect-4.text-2' }),
                        intl.formatMessage({ id: 'pg.home.sect-4.text-3' }),
                    ]}
                    childElement={
                        <LinkButton
                            text={intl.formatMessage({
                                id: 'pg.home.sect-4.button',
                            })}
                            href={routes.download}
                            type='router-link'
                            id='home-page-download-button'
                        />
                    }
                    childElementPosition='bottom'
                />
                <TextDisplay
                    title={intl.formatMessage({ id: 'pg.home.sect-5.title' })}
                    textContent={[
                        intl.formatMessage({ id: 'pg.home.sect-5.text-1' }),
                    ]}
                />
                <TextDisplay
                    title={intl.formatMessage({ id: 'pg.home.sect-6.title' })}
                    childElement={soldExampleList}
                    childElementPosition='under-title'
                />
                <TextDisplay
                    title={intl.formatMessage({ id: 'pg.home.sect-7.title' })}
                    textContent={[
                        intl.formatMessage({ id: 'pg.home.sect-7.text-1' }),
                        intl.formatMessage({ id: 'pg.home.sect-7.text-2' }),
                        intl.formatMessage({ id: 'pg.home.sect-7.text-3' }),
                    ]}
                />
                <TextDisplay
                    title={intl.formatMessage({ id: 'pg.home.sect-8.title' })}
                    textContent={[
                        intl.formatMessage({ id: 'pg.home.sect-8.text-1' }),
                    ]}
                />
                <TextDisplay
                    title={intl.formatMessage({ id: 'pg.home.sect-9.title' })}
                    textContent={[
                        intl.formatMessage({ id: 'pg.home.sect-9.text-1' }),
                    ]}
                />
                <TextDisplay
                    title={intl.formatMessage({ id: 'pg.home.sect-10.title' })}
                    textContent={[
                        intl.formatMessage({ id: 'pg.home.sect-10.text-1' }),
                        intl.formatMessage({ id: 'pg.home.sect-10.text-2' }),
                    ]}
                />
                <TextDisplay
                    title={intl.formatMessage({ id: 'pg.home.sect-11.title' })}
                    textContent={[
                        intl.formatMessage({ id: 'pg.home.sect-11.text-1' }),
                    ]}
                />
                <TextDisplay
                    title={intl.formatMessage({ id: 'pg.home.sect-12.title' })}
                    textContent={[
                        intl.formatMessage({ id: 'pg.home.sect-12.text-1' }),
                        intl.formatMessage({ id: 'pg.home.sect-12.text-2' }),
                    ]}
                />
                <TextDisplay
                    title={intl.formatMessage({ id: 'pg.home.sect-13.title' })}
                    textContent={[
                        intl.formatMessage({ id: 'pg.home.sect-13.text-1' }),
                    ]}
                    textContentCentred={true}
                    childElement={
                        <LinkButton
                            text={intl.formatMessage({
                                id: 'common.route-names.contact',
                            })}
                            href={routes.contact}
                            type='router-link'
                            id='home-page-contact-button-2'
                        />
                    }
                    childElementPosition='bottom'
                />
            </main>
        </>
    );
};

export default HomePage;
