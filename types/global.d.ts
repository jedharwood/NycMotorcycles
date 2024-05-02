type TimeRemaining = {
  time: number | undefined
  unit: 'days' | 'hours' | 'minutes'
}

type ActiveAuction = {
  title?: string
  url?: string
  image: GridImage
  bidders?: string
  timeRemaining?: TimeRemaining
  currentPrice?: string
  promptDecisionPrice?: string
}

type GridImage = {
  imageSrc: string
  imageAlt: string
  width?: number
  height?: number
  onImageClick?: () => void
}

type ArchiveBikeKey = keyof typeof archive

type ImageCatalog = {
  [key: string]: GridImage
}

type ContactFormData = {
  email: string
  senderName: string
  subject: string
  message: string
};

type InputFieldProps = {
  type: 'email' | 'text' | 'text-area' 
  placeholder: string
  name: ValidFieldNames
  register: UseFormRegister<ContactFormData>
  error: FieldError | undefined
  label: string
};

type ValidFieldNames =
| 'email'
| 'senderName'
| 'subject'
| 'message'