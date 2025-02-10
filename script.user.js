// ==UserScript==
// @name         AsuraScans Limit Max Width
// @namespace    https://ferdinandkeller.dev
// @updateURL    https://raw.githubusercontent.com/ferdinandkeller/tampermonkey-asurascans/main/script.meta.js
// @downloadURL  https://raw.githubusercontent.com/ferdinandkeller/tampermonkey-asurascans/main/script.user.js
// @version      1.4.3
// @description  Will limit the width of novels on Asura Comics website & remove ads.
// @author       Ferdinand Keller
// @match        https://asuracomic.net/series/*/chapter/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function wait_for_element_and_call(element_selector, callback) {
        const interval_id = setInterval(() => {
            const element = document.querySelector(element_selector)
            if (element) {
                clearInterval(interval_id)
                setInterval(callback, 1000, element)
            }
        }, 100)
    }

    // limit content max width
    wait_for_element_and_call('h2', (h2) => {
        let parent = h2.parentElement
        parent.style.maxWidth = '400px'
        parent.style.margin = '0 auto'
    })

    // find header ads banner and remove it
    wait_for_element_and_call('#header-ads', (header_ads) => {
        header_ads.nextSibling.style.display = 'none'
        header_ads.style.display = 'none'
    })

    // find popup ad banner and remove it
    wait_for_element_and_call('#chapter-above-ads', (chapter_above_ads) => {
        console.log('azd')
        chapter_above_ads.nextSibling.children[1].children[0].style.display = 'none'
    })
})();
