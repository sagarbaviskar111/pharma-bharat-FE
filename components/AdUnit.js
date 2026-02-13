import { useEffect, useRef } from 'react';

const AdUnit = ({ slot, layout = 'in-article', format = 'auto', layoutKey, align = 'center' }) => {
  const adRef = useRef(null);
  const isAdPushed = useRef(false);

  useEffect(() => {
    // Only push ad if it hasn't been pushed yet and the element exists
    if (!isAdPushed.current && adRef.current) {
      try {
        // Check if the ad element already has the data-adsbygoogle-status attribute
        const adStatus = adRef.current.getAttribute('data-adsbygoogle-status');

        if (!adStatus || adStatus === 'unfilled') {
          // Only push if not already filled
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          isAdPushed.current = true;
        }
      } catch (error) {
        // Silently handle AdSense errors in development
        if (process.env.NODE_ENV === 'development') {
          console.warn('AdSense error (safe to ignore in development):', error.message);
        }
      }
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: 'block', textAlign: align }}
      data-ad-client="ca-pub-1862946013812607"
      data-ad-slot={slot}
      data-ad-format={format}
      data-ad-layout={layout}
      data-ad-layout-key={layoutKey || '-6p+ea+1p-66+9c'}
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdUnit;
