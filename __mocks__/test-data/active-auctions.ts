export const activeAuctions: ActiveAuction[] = [
    {
        title: 'Vincent Black Shadow',
        url: 'https://www.google.com/',
        image: {
            imageSrc: 'http://placekitten.com/200/300',
            imageAlt: 'An image of a cat',
        },
        timeRemaining: {
            time: 56,
            unit: 'minutes',
        },
        bidders: '3',
        currentPrice: '10,000円',
        promptDecisionPrice: '15,000円',
    },
    {
        title: 'Another Vincent Black Shadow',
        url: 'https://www.google.com/',
        image: {
            imageSrc: 'http://placekitten.com/200/300',
            imageAlt: 'Another image of a cat',
        },
        timeRemaining: {
            time: 9,
            unit: 'hours',
        },
        bidders: '3',
        currentPrice: '98,560円',
    },
    {
        title: 'Yet Another Vincent Black Shadow',
        url: 'https://www.google.com/',
        image: {
            imageSrc: 'http://placekitten.com/200/300',
            imageAlt: 'Are you starting to see a pattern forming, yet?',
        },
        timeRemaining: {
            time: 3,
            unit: 'days',
        },
        bidders: '0',
        currentPrice: '33,000円',
        promptDecisionPrice: '35,000円',
    },
    {
        title: 'Another Vincent Black Shadow with a much longer title, this time',
        url: 'https://www.google.com/',
        image: {
            imageSrc: 'http://placekitten.com/200/300',
            imageAlt: 'Another image of a cat',
        },
        timeRemaining: {
            time: 9,
            unit: 'hours',
        },
        bidders: '3',
        currentPrice: '98,560円',
    },
    {
        title: 'test card with no otimeRemaining',
        url: 'https://www.google.com/',
        image: {
            imageSrc: 'http://placekitten.com/200/300',
            imageAlt: 'Another image of a cat',
        },
        timeRemaining: {
            time: undefined,
            unit: 'hours',
        },
        bidders: '3',
        currentPrice: '98,560円',
    },
];
