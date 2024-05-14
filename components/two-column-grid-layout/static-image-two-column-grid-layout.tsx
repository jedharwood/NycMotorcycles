import React from 'react';

import { StaticImage } from '@/types/static-image-types';

import StaticImageGrid from '../image-grid/static-image-grid';
import { TextDisplay, TextDisplayProps } from '../text-display/text-display';

type StaticImageTwoColumnGridLayoutProps = {
  images: StaticImage[];
  textDisplayPropObjects: TextDisplayProps[];
};

const StaticImageTwoColumnGridLayout = ({
  images,
  textDisplayPropObjects,
}: StaticImageTwoColumnGridLayoutProps) => {
  return (
    <div className='grid gap-4 md:grid-cols-2'>
      <StaticImageGrid images={images} maxColumns={1} />
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
  );
};

export default StaticImageTwoColumnGridLayout;
