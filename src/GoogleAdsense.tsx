import React, { useEffect } from 'react';
import { IGoogleAdsenseProps } from './types';

declare global {
  interface Window {
    adsbygoogle: { [key: string]: unknown }[];
  }
}

const GoogleAdsense: React.FC<IGoogleAdsenseProps> = props => {
  useEffect(() => {
    if (window) (window.adsbygoogle = window.adsbygoogle || []).push({});
  });

  return (
    <ins className={`adsbygoogle ${props.className}`}
         style={props.style}
         data-ad-client={props.adClient}
         data-ad-slot={props.adSlot}
         data-ad-layout={props.adLayout}
         data-ad-layout-key={props.adLayoutKey}
         data-ad-format={props.adFormat}
         data-full-width-responsive={props.fullWidthResponsive} />
  );
};

GoogleAdsense.defaultProps = {
  className: '',
  style: { display: 'block' },
  adLayout: '',
  adLayoutKey: '',
  adFormat: 'auto',
  fullWidthResponsive: 'false',
};

export default GoogleAdsense;
