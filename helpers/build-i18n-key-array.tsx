import { useIntl } from 'react-intl'

export const BuildI18nKeyArray = (searchKey: string): string[] => {
    const intl = useIntl()
    const i18nKeyArray: string[] = []
    Object.keys(intl.messages).forEach(key => {
        if (key.startsWith(searchKey)) i18nKeyArray.push(key)
    })

    return i18nKeyArray
}
