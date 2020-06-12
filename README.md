# Förderverein „Freunde des Goethe-Gymnasiums Nauen e.V.“

[![MIT License](https://img.shields.io/github/license/peter-stuhlmann/Foerderverein-Goethe-Gymnasium-Nauen.svg)](https://github.com/peter-stuhlmann/Foerderverein-Goethe-Gymnasium-Nauen/blob/master/LICENSE)
![Code size](https://img.shields.io/github/languages/code-size/peter-stuhlmann/Foerderverein-Goethe-Gymnasium-Nauen.svg)
[![open issues](https://img.shields.io/github/issues/peter-stuhlmann/Foerderverein-Goethe-Gymnasium-Nauen.svg)](https://github.com/peter-stuhlmann/Foerderverein-Goethe-Gymnasium-Nauen/issues?q=is%3Aopen+is%3Aissue)
[![closed issues](https://img.shields.io/github/issues-closed/peter-stuhlmann/Foerderverein-Goethe-Gymnasium-Nauen.svg)](https://github.com/peter-stuhlmann/Foerderverein-Goethe-Gymnasium-Nauen/issues?q=is%3Aissue+is%3Aclosed)

> This website was created for a booster club. However, it is reusable for various purposes.

## Live demo

Live demo: [https://foerderverein-ggnauen.de/](https://foerderverein-ggnauen.de/?source=github)

## Adjust the dummy content

If you clone this repository and start it with the command `$ npm start` you will see dummy content.
To use "real" content, adapt the following files:

- src/components/Parallax.js _(there you can change the background image url)_
- src/data/Content.js _(is used for the whole text content except the legal texts)_
- src/data/Legal.js _(is used for all legal texts like legal notice, privacy policy etc.)_
- src/helpers/analytics.js _(there you should use your tracking code)_
- public/img/ _(there you should replace all images)_

## Optimization (Lighthouse analysis)

This page is well optimized in terms of _Performance_, _Accessibility_, _Best Practices_ and _SEO_.

![Lighthouse](./readme-assets/lighthouse.png 'Lighthouse Homepage')  
_Lighthouse analysis of the home page from June 12, 2020_

---

## License

Licensed under the [MIT](https://github.com/peter-stuhlmann/Foerderverein-Goethe-Gymnasium-Nauen/blob/master/LICENSE) license by [Peter R. Stuhlmann](https://peter-stuhlmann-webentwicklung.de).
