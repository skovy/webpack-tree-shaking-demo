# 🌳 webpack tree shaking demo

This repository is simple webpack application with a few key dependencies:

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

The [`basic`](/tree/master/basic) directory contains the basics of an application with all of these
dependencies and renders a simple component. This app **does not** tree shake
the excess Font Awesome icons.
