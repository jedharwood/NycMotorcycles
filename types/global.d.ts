type TimeRemaining = {
  time: number | undefined;
  unit: 'days' | 'hours' | 'minutes';
};

type ActiveAuction = {
  title?: string;
  url?: string;
  image: GridImage;
  bidders?: string;
  timeRemaining?: TimeRemaining;
  currentPrice?: string;
  promptDecisionPrice?: string;
};

type GridImage = {
  imageSrc: string;
  imageAlt: string;
  width?: number;
  height?: number;
  onImageClick?: () => void;
};

type ArchiveBikeKey = keyof typeof archive;

type ContactFormData = {
  email: string;
  senderName: string;
  subject: string;
  message: string;
};

type InputFieldProps = {
  type: 'email' | 'text' | 'text-area';
  placeholder: string;
  name: 'email' | 'senderName' | 'subject' | 'message';
  register: UseFormRegister<ContactFormData>;
  error: FieldError | undefined;
  label: string;
};

type ComponentColour = 'green' | 'red';

type SoldOrCall = 'sold' | 'call';

type TheNumbersOneToFour = 1 | 2 | 3 | 4;

type NavLinkDetails = {
  href: string;
  text: string;
};

type FooterProps = {
  address: string;
  disclaimer: string;
  chevronText: string;
  altTextInstagramButton: string;
};

type ChildElementPosition = 'under-title' | 'bottom';

type TextDisplayProps = {
  title?: string;
  textContent?: string[];
  childElement?: JSX.Element;
  childElementPosition?: ChildElementPosition;
  isOpaque?: boolean;
  hasBorder?: boolean;
  textContentCentred?: boolean;
  borderColour?: ComponentColour;
  subTitle?: string;
  footer?: string;
};