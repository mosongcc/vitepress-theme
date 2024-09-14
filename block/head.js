/* 网页head加标签 */

//百度统计代码，提示：Vitepress是单页面，还要为router做处理
function bdtj(args) {
    if (!args.bdtjKey) {
        return [];
    }
    return [
        ['script', {}, `var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?${args.bdtjKey}";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();`]
    ];
}

//Google Ads
function googleAds(args) {
    if (!args.googleAds) {
        return [];
    }

    // 在需要展示广告的位置放AMP标签
    /*
    <amp-ad width="100vw" height="320"
         type="adsense"
         data-ad-client="ca-pub-5922529386412763"
         data-ad-slot="7009650228"
         data-auto-format="rspv"
         data-full-width="">
        <div overflow=""></div>
    </amp-ad>
    */
    return [
        ['script', {"async": true, "custom-element": "amp-ad", "src": 'https://cdn.ampproject.org/v0/amp-ad-0.1.js'}]
    ]
}


export default function (args = {bdtjKey: ""}) {
    return [
        ['link', {rel: 'shortcut icon', href: '/favicon.ico'}],
        ...bdtj(args),
        ...googleAds(args),
    ]
}