// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-05-28
// @description  try to take over the world!
// @author       You
// @match        https://ccfolia.com/rooms/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

document.addEventListener('keydown', event => {
    if (event.key === 's') {
        const scenes = document.querySelectorAll('.ePMquR');

        document.querySelectorAll('.ePMquR').forEach(scenes => {
            const value = scenes.textContent || scenes.innerText;

            if (value.endsWith('__$red')) {
                const grandParent = scenes.parentElement?.parentElement;
                if (grandParent) {
                    grandParent.style.backgroundColor = 'red';
                }
            }
            if (value.endsWith('__$blue')) {
                const grandParent = scenes.parentElement?.parentElement;
                if (grandParent) {
                    grandParent.style.backgroundColor = 'blue';
                }
            }
        })
    }
});