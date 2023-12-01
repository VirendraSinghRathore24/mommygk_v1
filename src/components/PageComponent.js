import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


const PageComponent = () => {

    return (
        <div>
            <Helmet>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <script>
                    {
                        `(adsbygoogle=window.adsbygoogle || []).push({
                            google_ad_client:'ca-pub-2373979360301400',
                            enable_page_level_ads: true
                        });`
                    }
                </script>
            </Helmet>
        </div>
    );
};
export default PageComponent;