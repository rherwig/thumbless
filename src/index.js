import {viewFullSize} from './handler/view-full-size';

chrome.contextMenus.create({
    "title": "View full size",
    "contexts": ["image", "link"],
    "onclick": viewFullSize
});
