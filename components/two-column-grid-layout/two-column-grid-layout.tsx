import { ImageGrid } from '../image-grid/image-grid'
import React from 'react'
import { TextDisplay, TextDisplayProps } from '../text-display/text-display'

type TwoColumnGridLayoutProps = {
  images: GridImage[]
  textDisplayPropObjects: TextDisplayProps[]
}

export const TwoColumnGridLayout = ({
  images,
  textDisplayPropObjects
}: TwoColumnGridLayoutProps) => {

  return (
    <div className='grid md:grid-cols-2 gap-4'>
      <ImageGrid images={images} maxColumns={1} />
      <div className='space-y-4'>
        {textDisplayPropObjects.map((props, idx) => (
          <TextDisplay 
            key={idx}
            title={props.title}
            textContent={props.textContent}
            childElement={props.childElement}
            childElementPosition={props.childElementPosition}
          />
        ))}
      </div>
      
    </div>
  )
}
