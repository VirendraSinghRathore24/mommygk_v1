import React from 'react';
import { Helmet } from 'react-helmet';

const PageComponent = () => {
  return (
    <div>
      {/* Your page content goes here */}
      <Helmet>
        {/* Add the Google AdSense script to the head */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <script>
          {`(adsbygoogle = window.adsbygoogle || []).push(
            {
                google_ad_client: ca-pub-4401844428563263,
                enable_page_level_ads: true
            });`}
        </script>
      </Helmet>
    </div>
  );
};
export default PageComponent;