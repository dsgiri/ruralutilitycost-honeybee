import { useEffect } from 'react';

export function AdContainer({ slot, location }: { slot: string; location: string }) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense push error:', e);
    }
  }, []);

  return (
    <div 
      className="my-5 mx-auto min-h-[250px] flex justify-center items-center bg-slate-50 border border-slate-200" 
      data-ad-status="unfilled"
      aria-label={`Advertisement - ${location}`}
    >
      <ins className="adsbygoogle"
           style={{ display: 'block', width: '100%' }}
           data-ad-client="ca-PUB-YOUR_CLIENT_ID"
           data-ad-slot={slot}
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
}
