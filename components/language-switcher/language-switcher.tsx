import { JP, US } from 'country-flag-icons/react/3x2';
import { useRouter } from 'next/router';

const LanguageSwitcher = (): JSX.Element => {
    const router = useRouter();
    const { locale, pathname, query, asPath } = router;
    const flagClasses: string = 'rounded-sm w-full h-full';

    const switchLanguage = (): void => {
        const newLocale: string = locale === 'en' ? 'ja' : 'en';
        router.push({ pathname, query }, asPath, { locale: newLocale });
    };

    return (
        <div className='mr-6 flex justify-end sm:mr-0'>
            <button onClick={() => switchLanguage()} className='h-6 w-9'>
                {locale === 'en' ? (
                    <JP title='日本語' className={flagClasses} />
                ) : (
                    <US title='English' className={flagClasses} />
                )}
            </button>
        </div>
    );
};

export default LanguageSwitcher;
