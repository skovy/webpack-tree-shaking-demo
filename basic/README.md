# basic

## bundle analyzer

![webpack bundle analyzer](./docs/webpack-bundle-analyzer.png)

## webpack output

```
Webpack Bundle Analyzer is started at http://127.0.0.1:8888
Use Ctrl+C to close it
Hash: 35effff1a58f19a5012f
Version: webpack 4.39.1
Time: 1474ms
Built at: 08/04/2019 11:36:30 AM
  Asset     Size  Chunks                    Chunk Names
main.js  819 KiB       0  [emitted]  [big]  main
Entrypoint main [big] = main.js
 [2] (webpack)/buildin/global.js 472 bytes {0} [built]
[15] (webpack)/buildin/module.js 497 bytes {0} [built]
[18] ./src/index.js + 3 modules 657 KiB {0} [built]
     | ./src/index.js 395 bytes [built]
     |     + 3 hidden modules
    + 16 hidden modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  main.js (819 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (819 KiB)
      main.js


WARNING in webpack performance recommendations:
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/
```