import React from 'react';

import { StaticImage } from '@/types/image-types';

import ImageGrid from '../image-grid/image-grid';
import TextDisplay from '../text-display/text-display';

type TwoColumnGridLayoutProps = {
    images: StaticImage[];
    textDisplayPropObjects: TextDisplayProps[];
};

const TwoColumnGridLayout = ({
    images,
    textDisplayPropObjects,
}: TwoColumnGridLayoutProps) => {
    return (
        <div className='grid gap-4 md:grid-cols-2'>
            <ImageGrid images={images} maxColumns={1} />
            <div className='space-y-4'>
                {textDisplayPropObjects.map((props, idx) => (
                    <TextDisplay
                        key={idx}
                        title={props.title}
                        subTitle={props.subTitle}
                        textContent={props.textContent}
                        childElement={props.childElement}
                        childElementPosition={props.childElementPosition}
                        footer={props.footer}
                    />
                ))}
            </div>
        </div>
    );
};

export default TwoColumnGridLayout;
