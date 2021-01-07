import React from 'react';
import GoogleAdsense from '../index';

describe('Google Adsense', () => {

  test('Should create ads', () => {
    expect(
      () => (
        <GoogleAdsense
          adClient='ca-pub-0000000000000000'
          adSlot='0000000000'
          style={{ 'display': 'block', 'textAlign': 'center' }}
          adLayout='in-article'
          adFormat='fluid'
          fullWidthResponsive='true'
        />
      ),
    ).not.toThrow();
  });

});

