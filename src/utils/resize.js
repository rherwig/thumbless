import {getSite} from './get-site';

/**
 * Processes the URL and tries to find the resized version.
 * @param url
 * @returns {*}
 */
export function resize(url) {
    const site = getSite(url);
    if (site) {
        for (let expression of site.expressions) {
            url = url.replace(expression.regex, expression.replacement);
        }
    }

    return url;
}