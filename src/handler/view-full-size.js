import {resize} from '../utils/resize';

/**
 * Click handler for context menu item.
 * @param event
 */
export function viewFullSize(event) {
    const url = event.srcUrl || event.linkUrl;

    chrome.tabs.create({
        url : resize(url),
        active: false,
        selected: false
    });
}