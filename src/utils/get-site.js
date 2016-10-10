import {SUPPORTED_SITES} from '../constants/extension-constants';

/**
 * Searches for the site in the supported array.
 * @param url
 * @returns {*}
 */
export function getSite(url) {
    for (let i = 0, l = SUPPORTED_SITES.length; i < l; i++) {
        if (url.indexOf(SUPPORTED_SITES[i].url) > -1 && SUPPORTED_SITES[i].expressions) {
            return SUPPORTED_SITES[i];
        }
    }
    return null;
}