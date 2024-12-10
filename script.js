// ==UserScript==
// @name         AsuraScans Limit Max Width
// @namespace    https://ferdinandkeller.dev
// @version      2024-11-11
// @description  Will limit the width of novels on Asura Comics website.
// @author       Ferdinand Keller
// @match        https://asuracomic.net/series/*/chapter/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // retrieve header
    let h2 = document.querySelector('h2')
    // retrieve the div containing the header
    let parent = h2.parentElement
    // edit the style of the div
    parent.style.maxWidth = '400px';
    parent.style.margin = '0 auto';
})();
