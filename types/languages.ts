import en from '../languages/en.json';
import ja from '../languages/ja.json';

export const langs = {
    en: 'en',
    ja: 'ja',
};

type Messages = {
    [key: string]: {
        [key: string]: string;
    };
}; 

export const messages: Messages = {
    en,
    ja,
};