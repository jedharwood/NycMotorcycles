import { Html, Head, Main, NextScript } from 'next/document';

import { langs } from '@/types/languages';

export default function Document() {
    return (
        <Html lang={langs.en}>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
