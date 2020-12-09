# react-adsense-google
Google Adsense를 간편하게 설정할 수 있는 React 컴포넌트

[![npm](https://img.shields.io/npm/v/react-adsense-google.svg)](https://www.npmjs.com/package/react-adsense-google)
[![npm](https://img.shields.io/npm/dm/react-adsense-google.svg)](https://www.npmjs.com/package/react-adsense-google)
[![npm](https://img.shields.io/npm/l/react-adsense-google.svg)](https://www.npmjs.com/package/react-adsense-google)

# 1. 설치
## NPM을 통한 설치
> `npm install --save react-adsense-google`

## Yarn을 통한 설치
> `yarn add react-adsense-google`

# 2. 사용
## Google AdSense 사이트 연결
[AdSense 사이트 연결](https://support.google.com/adsense/answer/7584263?hl=ko&ref_topic=1250103)을 진행합니다.
`<head>` 태그와 `</head>` 태그 사이에 `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />` 코드를 붙여넣습니다.

## 광고 게시
```javascript
import GoogleAdsense from 'react-adsense-google';

// 기본 설정을 통한 광고 게시
<GoogleAdsense
	adClient='ca-pub-1234567890'
  adSlot='9876543210'
/>

// 커스텀 설정을 통한 광고 게시
<GoogleAdsense
	adClient='ca-pub-1234567890'
  adSlot='9876543210'
	style={{'display': 'block', 'text-align': 'center'}}
  adLayout='in-article'
  adFormat='fluid'
  fullWidthResponsive='true'
/>
```

# 3. 옵션
|필수 여부|Google AdSense 옵션|react-adsense-google 옵션|기본값|설명|
|:---:|:---:|:---:|:---:|:---:|
|false||className|''|`ins` 태그의 클래스 이름|
|false||style|{display: 'block'}|`ins` 태그의 스타일|
|true|data-ad-client|adClient|-|고객 고유 코드|
|true|data-ad-slot|adSlot|-|광고 고유 코드|
|false|data-ad-layout|adLayout|''|광고 레이아웃 `in-article`|
|false|data-ad-layout-key|adLayoutKey|''|광고 레이아웃 고유 코드|
|false|data-ad-format|adFormat|'auto'|광고 포멧 `auto`, `fluid`, `rectangle`, `vertical`, `horizontal`|
|false|data-full-width-responsive|fullWidthResponsive|'false'|광고가 휴대 기기에서 전체 폭 차지 `true`, `false`|
