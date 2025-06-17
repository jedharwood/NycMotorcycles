import { JP, US } from 'country-flag-icons/react/3x2';
import { useRouter } from 'next/router';

import { langs } from '@/types/languages';

const LanguageSwitcher = (): JSX.Element => {
    const router = useRouter();
    const { locale, pathname, query, asPath } = router;
    const flagClasses: string = 'rounded-sm h-6 w-9 shadow-lg card-hover';

    const switchLanguage = (): void => {
        const newLocale: string = locale === langs.en ? langs.ja : langs.en;
        router.push({ pathname, query }, asPath, { locale: newLocale });
    };

    return (
        <div className='mr-6 flex justify-end sm:mr-0'>
            <button onClick={() => switchLanguage()}>
                {locale === langs.en ? (
                    <JP title='日本語' className={flagClasses} />
                ) : (
                    <US title='English' className={flagClasses} />
                )}
            </button>
        </div>
    );
};

export default LanguageSwitcher;
