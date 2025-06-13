// ==UserScript==
// @name         AsuraScans Limit Max Width
// @namespace    https://ferdinandkeller.dev
// @updateURL    https://raw.githubusercontent.com/ferdinandkeller/tampermonkey-asurascans/main/script.meta.js
// @downloadURL  https://raw.githubusercontent.com/ferdinandkeller/tampermonkey-asurascans/main/script.user.js
// @version      1.4.4
// @description  Will limit the width of novels on Asura Comics website & remove ads.
// @author       Ferdinand Keller
// @match        https://asuracomic.net/series/*/chapter/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    function remove_header_ads() {
        const header_ads = document.querySelector('#header-ads + *');
        if (!header_ads) return false;
        if (header_ads.tagName.toLowerCase() === 'header') return false;
        header_ads.style.display = 'none';
        return true;
    }
    function limit_width() {
        const b = document.querySelector('header + * + *');
        const classes = b.className;
        if (classes !== "max-w-[1220px] pt-2") return false;
        const c = b.querySelector('div > div > div > .py-8')
        c.style.maxWidth = '400px';
        c.style.margin = '0 auto';
        return true;
    }
    function remove_ads() {
        const f = document.querySelector('.fixed');
        if (!f) return false;
        if (f.classList.contains('bottom-0')) return false;
        f.style.display = 'none';
        return true;
    }
    function run_until_success(func) {
        if (func()) return;
        const observer = new MutationObserver(() => {
            if (func()) observer.disconnect();
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    run_until_success(remove_header_ads);
    run_until_success(limit_width);
    run_until_success(remove_ads);
})();
