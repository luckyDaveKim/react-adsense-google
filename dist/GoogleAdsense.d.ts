import React from 'react';
import { IGoogleAdsenseProps } from './types';
declare global {
    interface Window {
        adsbygoogle: {
            [key: string]: unknown;
        }[];
    }
}
declare const GoogleAdsense: React.FC<IGoogleAdsenseProps>;
export default GoogleAdsense;
