import React from 'react';
import { Helmet } from 'react-helmet';



const PageComponent = () => {

    return (
        <div>
            <Helmet>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <script>
                    {`(adsbygoogle=window.adsbygoogle || []).push({
                            google_ad_client:"ca-pub-1540353019718575",
                            enable_page_level_ads: true
                        });`}
                </script>
            </Helmet>
        </div>
    );
};
export default PageComponent;