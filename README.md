# thumbless
thumbless is an extension for Google Chrome that allows you to view the fullsize version
of an image, when you are only provided with the thumbnail url.

Many pages (i.e. forums) hide the fullsize version of an image or require you to register
in order to view it. thumbless give you the possiblity to right click the image and choose
to view the fullsize version. For the supported sites, 
see the section [Supported Sites](#supported-sites).

**Table of Contents**
- [Build](#build)
- [Installation](#installation)
- [Supported Sites](#supported-sites)
  - [Accessible via context menu](#context-menu)
  - [Accessible via other methods](#other-methods)
    - [Instagram](#instagram)
- [History](#history)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Build <a id="build"></a>
1. Checkout the project
2. Run `npm i` to install the dependencies
3. Run `npm run build` to build the extension
4. The extension is now available in the `build` directory of the project

## Installation <a id="installation"></a>
As of yet, the extension is not available via the Chrome store (will come soon!).
To install it manually, do the following:

1. Open Chrome's extension page using the menu or by typing `chrome://extensions/` in the address bar
2. Enable the developer mode on the top of the page
3. Click `Load unpacked extension...` and select the previosly created `build` directory
4. You should now see thumbless in your extensions list

## Supported Sites <a id="supported-sites"></a>
As each site needs a separate implementation to parse the links, change them
and possibly more, there are only a couple of services supported at the moment.
But watch out: there are many more to come!

### Accessible via context menu <a id="context-menu"></a>
The following sites are implemented via context menu. Just right-click the thumbnail
or the thumbnails url and choose the "View full size" option.

- [image-bugs.com](http://image-bugs.com)
- [imagevenue.com](http://imagevenue.com)
- [imagebam.com](http://imagebam.com)
- [imgbox.com](http://imgbox.com)
- [imgz.pw](http://imgz.pw)
- [imgcub.com](http://imgcub.com)
- [directupload.net](http://directupload.net)
- [szenenight.de](http://szenenight.de)

### Accessible via other methods <a id="other-methods"></a>
The following sites are not supported via context menu, since their architecture is
somewhat different.

#### Instagram <a id="instagram"></a>
To access the fullsize version of an instagram image, start out on the feed of the
site/person you want to view a picture of. Then do the following:
- Find the desired picture in the feed
- Right-click it and choose to open the link in a new tab
- You should now see this picture on a seperate site
- Click the picture
- The fullsize version is now loaded

I know, usability is still being improved here. ;-)

## History <a id="history"></a>
October 8th, 2016
- Initial commit for this repository
- Implementation of content script for viewing instagram pictures

## Contributing <a id="contributing"></a>
1. Fork it!
2. Create your feature branch: `git checkout -b my-awesome-feature`
3. Commit your changes: `git commit -am 'implements an awesome feature'`
4. Push to the branch: `git push origin my-awesome-feature`
5. Submit a pull request and I will review and implement it
6. You're done! Just that easy!

## Credits <a id="credits"></a>
Creator: Rico Herwig

## License <a id="license"></a>
MIT
