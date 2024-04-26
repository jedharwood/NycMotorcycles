declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_API_MOCKING: boolean;
        SELECTOR_PRODUCT: string;
        SELECTOR_PRODUCT_PRICE: string;
        SELECTOR_PRODUCT_TIME: string;
        SELECTOR_PRODUCT_TITLE: string;
        SELECTOR_PRODUCT_BID: string;
        YAHOO_AUCTION_PROFILE_PAGE_URL: string;
      }
    }
  }
  
  export {}