# 🌳 webpack tree shaking demo

This repository is simple webpack application with a few key dependencies and
how tree shaking can impact the overall bundle size:

- `react` & `react-dom`
- `lodash`
- `@fortawesome/fontawesome-svg-core`
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/react-fontawesome`

## Setup

After cloning this repository, change directories to the example app you'd
like to see. For example:

- `cd basic`
- `yarn install`
- `yarn build`
- _(open `dist/index.html` in a browser)_

### `basic`

The [`basic`](/basic) directory contains the basics of an application with all of these
dependencies and renders a simple component. This app **does not** tree shake
the excess Font Awesome icons.

### `import-used-only`

The [`import-used-only`](/import-used-only) directory updates the basic example
to import only the icons used and add them to the Font Awesome library.

### `explicit-import`

The [`explicit-import`](/explicit-import) directory updates the basic example
to explicitly import the icons that are used and doesn't create a Font Awesome
library.

---

See the [Font Awesome - Tree Shaking](https://fontawesome.com/how-to-use/with-the-api/other/tree-shaking)
docs for more details around tree shaking Font Awesome.