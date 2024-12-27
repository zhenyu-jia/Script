// ==UserScript==
// @name         Bing搜索居中显示
// @namespace    http://tampermonkey.net/
// @version      2024-12-27
// @description  让Bing搜索页面布局居中
// @author       Jia Zhenyu
// @match        https://*.bing.com/search?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @run-at       document-start
// @grant        GM_addStyle
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // 应用自定义样式
    GM_addStyle(`
        #b_header {
            width: fit-content;
            margin: auto;
        }
        #b_content {
            display: flex !important;
            justify-content: center !important;
        }
        #b_dynRail {
            display: none !important; /* 更明确地隐藏动态内容栏 */
        }
    `);

    // 检查页面元素是否加载完成
    const observer = new MutationObserver(() => {
        const content = document.querySelector('#b_content');
        if (content) {
            observer.disconnect(); // 停止观察
            content.style.alignItems = 'flex-start'; // 确保内容顶部对齐
        }
    });

    observer.observe(document, { childList: true, subtree: true });
})();
