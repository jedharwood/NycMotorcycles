import { useRouter } from 'next/router';

const LanguageSwitcher = (): JSX.Element => {
    const router = useRouter();
    const { locale, pathname, query, asPath } = router;

    const switchLanguage = (): void => {
        const newLocale: string = locale === 'en' ? 'ja' : 'en';
        router.push({ pathname, query }, asPath, { locale: newLocale });
    };

    return (
        <div className='flex justify-end mr-6'>
            <button onClick={() => switchLanguage()}>
                {locale === 'en' ? '日本語' : 'English' }    
            </button>
        </div>
    );
};

export default LanguageSwitcher;