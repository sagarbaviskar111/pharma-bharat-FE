import { useEffect } from 'react';

const AdUnit = ({ slot, layout = 'in-article', format = 'auto', layoutKey, align = 'center' }) => {
  useEffect(() => {
    if (window.adsbygoogle) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <ins
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
