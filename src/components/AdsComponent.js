import React from 'react';

export default class AdsComponent extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-4401844428563263'
          data-ad-slot='4401844428563263'
          data-ad-format='auto' />
    );
  }
}