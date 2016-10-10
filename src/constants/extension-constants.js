import {getInstagramUrl} from '../utils/get-instagram-url';

/**
 * Array of supported sites containing their regexes.
 * @type {[]}
 */
export const SUPPORTED_SITES = [
    {
        url: "image-bugs.com",
        expressions: [
            { regex: /th\.jpg/i, replacement: "jpg" }
        ]
    },
    {
        url: "imagevenue.com",
        expressions: [
            { regex: /loc\d*\/th_/i, replacement: "img.php?image=" }
        ]
    },
    {
        url: "imagebam.com",
        expressions: [
            { regex: /thumbnails\d+\./i, replacement: "" },
            { regex: /\/\d+\//i, replacement: "/image/" }
        ]
    },
    {
        url: "imgbox.com",
        expressions: [
            { regex: /\d+\.t\./i, replacement: "" }
        ]
    },
    {
        url: "imgz.pw",
        expressions: [
            { regex: /thumb/i, replacement: "image" }
        ]
    },
    {
        url: "imgcub.com",
        expressions: [
            { regex: /thumb/i, replacement: "image" }
        ]
    },
    {
        url: "directupload.net",
        expressions: [
            { regex: /temp/i, replacement: "" }
        ]
    },
    {
        url: "szenenight.de",
        expressions: [
            { regex: /(-\d{4}-\d{3}-\d{3}-wm-|-\d{3}-\d{3}-\d{3}).*/i, replacement: ".jpg" },
            { regex: /resized/i, replacement: "original" }
        ]
    },
    {
        url: "instagram.com/p",
        fn: getInstagramUrl
    }
];