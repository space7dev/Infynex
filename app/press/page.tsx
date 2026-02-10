import React from 'react';
import Script from 'next/script';
import PressHero from '@/components/PressHero';
import PressList from '@/components/PressList';
import Footer from '@/components/Footer';

export default function PressPage() {
  return (
    <main className="press-page">
      <div
        id="owagent-div"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 0,
          backgroundColor: 'rgb(255, 255, 255)',
          color: 'red',
          textAlign: 'center',
          zIndex: 9999,
        }}
      />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WBKMSB6"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="gtm-noscript"
        />
      </noscript>
      <button
        type="button"
        className="fixed right-4 bottom-20 z-40 bg-amber-400 text-slate-900 font-semibold py-3 px-4 rounded-full shadow-lg hover:shadow-xl hover:bg-amber-300 transition flex items-center gap-2"
        aria-label="Get A Free Quote"
      >
        <img
          src="https://www.Infynex.com/assets/img/new_suffes_images/mess.webp"
          alt="Chat Icon"
          className="w-5 h-5"
        />
        <span className="hidden md:inline">Get A Free Quote</span>
      </button>
      <PressHero />
      <PressList />

      <Script
        id="gtag-js"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XN81BGD7V6&cx=c&gtm=4e6241"
        strategy="beforeInteractive"
      />
      <Script
        id="gtm-js"
        async
        src="https://www.googletagmanager.com/gtm.js?id=GTM-WBKMSB6"
        strategy="beforeInteractive"
      />
      <Script
        id="gtm-inline"
        strategy="beforeInteractive"
      >{`(function(w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var f = d.getElementsByTagName(s)[0];
  var j = d.createElement(s);
  var dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-WBKMSB6');`}</Script>
      <Script
        id="jquery"
        src="https://www.suffescom.com/assets/js/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script
        id="livechat-tracking"
        async
        src="https://cdn.livechatinc.com/tracking.js"
        strategy="afterInteractive"
      />
      <Script
        id="smartlook-recorder"
        async
        src="https://web-sdk.smartlook.com/recorder.js"
        strategy="afterInteractive"
      />
      <Script
        id="smartlook-esm"
        type="module"
        src="https://web-sdk.smartlook.com/es6/init.05af5a3f7ffa07a9796f.js"
        strategy="afterInteractive"
      />
      <Script
        id="smartlook-legacy"
        nomodule
        src="https://web-sdk.smartlook.com/es5/init.56c464fb7213027d95cc.js"
        strategy="afterInteractive"
      />
      <Script
        id="bootstrap-js"
        src="https://www.suffescom.com/assets/js/bootstrap.min.js"
        strategy="afterInteractive"
      />
      <Script
        id="owl-carousel"
        src="https://www.suffescom.com/assets/js/owl.carousel.min.js?v="
        strategy="afterInteractive"
      />
      <Script
        id="slick"
        src="https://www.suffescom.com/assets/js/slick.js"
        strategy="afterInteractive"
      />
      <Script
        id="aos"
        src="https://www.suffescom.com/assets/js/aos.js"
        strategy="afterInteractive"
      />
      <Script
        id="lazy"
        src="//cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.9/jquery.lazy.min.js"
        strategy="afterInteractive"
      />
      <Script
        id="lazy-plugins"
        src="//cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.9/jquery.lazy.plugins.min.js"
        strategy="afterInteractive"
      />
      <Script
        id="main-js"
        src="https://www.suffescom.com/assets/js/main.js"
        strategy="afterInteractive"
      />
      <Script
        id="custom-js"
        src="https://www.suffescom.com/assets/js/custom.js"
        strategy="afterInteractive"
      />
      <Script
        id="dmca"
        src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"
        strategy="afterInteractive"
      />
      <Script
        id="api-main"
        src="https://api.suffescom.com/cdn/js/main.min.js?captcha_render=false&v=575676262"
        strategy="afterInteractive"
      />
      <Script
        id="cloudflare"
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015"
        integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ=="
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script id="press-inline" strategy="afterInteractive">{`$(function() {
  $('.lazy').lazy({ visibleOnly: true });
  $('.lazy-delay').lazy({ visibleOnly: true, delay: 2000 });
});
AOS.init({ duration: 1200 });
window.onload = function() {
  window.__lc = window.__lc || {};
  window.__lc.license = 12690588;
  window.__lc.ga_version = "gtag";
  (function(n, t, c) {
    function i(n) { return e._h ? e._h.apply(null, n) : e._q.push(n); }
    var e = { _q: [], _h: null, _v: "2.0", on: function() { i(["on", c.call(arguments)]); }, once: function() { i(["once", c.call(arguments)]); }, off: function() { i(["off", c.call(arguments)]); }, get: function() { if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load."); return i(["get", c.call(arguments)]); }, call: function() { i(["call", c.call(arguments)]); }, init: function() { var n = t.createElement("script"); n.async = true; n.type = "text/javascript"; n.src = "https://cdn.livechatinc.com/tracking.js"; t.head.appendChild(n); } };
    if (!n.__lc.asyncInit) e.init();
    n.LiveChatWidget = n.LiveChatWidget || e;
  })(window, document, [].slice);
};
window.smartlook = window.smartlook || function(a) {
  var b = smartlook = function() { b.api.push(arguments); };
  var c = a.getElementsByTagName("head")[0];
  a = a.createElement("script");
  b.api = [];
  a.async = true;
  a.type = "text/javascript";
  a.charset = "utf-8";
  a.src = "https://web-sdk.smartlook.com/recorder.js";
  c.appendChild(a);
}(document);
smartlook("init", "d35951d3dc124561c308c1fc9bb3791f5d0a4c3f", { region: "eu" });
smartlook("record", { ips: true });
smartlook("identify", userId);
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
gtag("js", new Date());
gtag("config", "G-XN81BGD7V6");
$(".press-scroll-btn a").click(function() {
  $('html,body').animate({ scrollTop: $("#press-main").offset().top }, 'fast');
});`}</Script>
    </main>
  );
}
