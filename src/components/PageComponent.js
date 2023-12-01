import React from 'react';
import { Helmet } from 'react-helmet';

const PageComponent = () => {
  return (
    <div>
      {/* Your page content goes here */}
      <Helmet>
        {/* Add the Google AdSense script to the head */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4401844428563263"
     crossorigin="anonymous"></script>
      </Helmet>
    </div>
  );
};
export default PageComponent;