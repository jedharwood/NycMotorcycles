import { ImageGrid } from '../image-grid/image-grid'
import React from 'react'
import { TextDisplay, TextDisplayProps } from '../text-display/text-display'

type TwoColumnGridPageProps = {
  images: GridImage[]
  textDisplayPropObjects: TextDisplayProps[]
}

export const TwoColumnGridPage = ({
  images,
  textDisplayPropObjects
}: TwoColumnGridPageProps) => {

  return (
    <div className='grid md:grid-cols-2 gap-4'>
      <ImageGrid images={images} maxColumns={1} />
      <div>
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
