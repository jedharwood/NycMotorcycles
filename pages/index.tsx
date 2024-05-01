import { TextDisplay } from '@/components/text-display/text-display'
import { LinkButton } from '@/components/link-button/link-button'
import { HeadElement } from '@/components/head-element/head-element'
import { routes } from '@/utilities/resource-utilities'
import { FC } from 'react'
import Jumbotron from '@/components/jumbotron/jumbotron'
import { images as img } from '../public/images/home/image-catalog'
import { BuildList } from '@/helpers/build-list'

const HomePage: FC = (): JSX.Element => {
  const desirableModelList: string[] = [
    'pg.home.sect-2.list-1',
    'pg.home.sect-2.list-2',
    'pg.home.sect-2.list-3',
    'pg.home.sect-2.list-4',
    'pg.home.sect-2.list-5',
    'pg.home.sect-2.list-6',
  ]

  const soldExampleList: string[] = [
    'pg.home.sect-6.list-1',
    'pg.home.sect-6.list-2',
    'pg.home.sect-6.list-3',
    'pg.home.sect-6.list-4',
    'pg.home.sect-6.list-5',
    'pg.home.sect-6.list-6',
  ]

  return (
    <>
      <HeadElement
        pageTitle='pg.home.head.meta.title'
        content='pg.home.head.meta.content'
      />
      <main className='space-y-6'>
        <Jumbotron image={img.racing} legend='pg.home.jumbotron' />
        <TextDisplay
          title='pg.home.sect-1.title'
          childElement={
            <LinkButton 
              text='pg.home.sect-1.button' 
              href={routes.contact} 
              type='router-link'
            />
          }
          childElementPosition='under-title'
        />
        <TextDisplay
          title='pg.home.sect-2.title'
          textContent={['pg.home.sect-2.text-1', 'pg.home.sect-2.text-2']}
          childElement={
            BuildList({listItems: desirableModelList})
          }
          childElementPosition='under-title'
        />
        <TextDisplay
          title='pg.home.sect-3.title'
          textContent={['pg.home.sect-3.text-1']}
        />
        <TextDisplay
          title='pg.home.sect-4.title'
          textContent={[
            'pg.home.sect-4.text-1',
            'pg.home.sect-4.text-2',
            'pg.home.sect-4.text-3',
          ]}
          childElement={
            <LinkButton 
              text='pg.home.sect-4.button' 
              href={routes.download} 
              type='router-link'
            />
          }
          childElementPosition='bottom'
        />
        <TextDisplay
          title='pg.home.sect-5.title'
          textContent={['pg.home.sect-5.text-1']}
        />
        <TextDisplay
          title='pg.home.sect-6.title'
          childElement={
            BuildList({listItems: soldExampleList})
          }
          childElementPosition='under-title'
        />
        <TextDisplay
          title='pg.home.sect-7.title'
          textContent={[
            'pg.home.sect-7.text-1',
            'pg.home.sect-7.text-2',
            'pg.home.sect-7.text-3',
          ]}
        />
        <TextDisplay
          title='pg.home.sect-8.title'
          textContent={['pg.home.sect-8.text-1']}
        />
        <TextDisplay
          title='pg.home.sect-9.title'
          textContent={['pg.home.sect-9.text-1']}
        />
        <TextDisplay
          title='pg.home.sect-10.title'
          textContent={['pg.home.sect-10.text-1', 'pg.home.sect-10.text-2']}
        />
        <TextDisplay
          title='pg.home.sect-11.title'
          textContent={['pg.home.sect-11.text-1']}
        />
        <TextDisplay
          title='pg.home.sect-12.title'
          textContent={['pg.home.sect-12.text-1', 'pg.home.sect-12.text-2']}
        />
        <TextDisplay
          title='pg.home.sect-13.title'
          textContent={['pg.home.sect-13.text-1']}
          childElement={
            <LinkButton 
              text='common.route-names.contact' 
              href={routes.contact} 
              type='router-link'
            />
          }
          childElementPosition='bottom'
        />
      </main>
    </>
  )
}

export default HomePage
