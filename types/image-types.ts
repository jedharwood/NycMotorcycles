import { StaticImageData } from 'next/image';

export type StaticImage = {
  image: StaticImageData;
  altText: string;
  onImageClick?: () => void;
};

export type ImageIndex = {
  [key: string]: StaticImage;
};

export const blankStaticImage: StaticImage = {
  image: {
    src: '',
    height: 0,
    width: 0,
  },
  altText: '',
};