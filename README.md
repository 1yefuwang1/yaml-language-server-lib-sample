This repo provides minimum code that reproduces the TypeError when using yaml-language-server@1.12.0 as a umd library.

To reproduce it, run
```
npm i && npm run build && node build/index.js
```
It will show something similiar to:
```
> umd-test@1.0.0 build /home/wyf/umd-test
> npx tsc -p ./

/home/wyf/umd-test/node_modules/yaml-language-server/lib/umd/languageservice/parser/yaml-documents.js:29
    class SingleYAMLDocument extends jsonParser07_1.JSONDocument {
                                                    ^

TypeError: Class extends value undefined is not a constructor or null
    at /home/wyf/umd-test/node_modules/yaml-language-server/lib/umd/languageservice/parser/yaml-documents.js:29:53
    at /home/wyf/umd-test/node_modules/yaml-language-server/lib/umd/languageservice/parser/yaml-documents.js:7:17
    at Object.<anonymous> (/home/wyf/umd-test/node_modules/yaml-language-server/lib/umd/languageservice/parser/yaml-documents.js:13:3)
    at Module._compile (internal/modules/cjs/loader.js:1068:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
    at Module.load (internal/modules/cjs/loader.js:933:32)
    at Function.Module._load (internal/modules/cjs/loader.js:774:14)
    at Module.require (internal/modules/cjs/loader.js:957:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at /home/wyf/umd-test/node_modules/yaml-language-server/lib/umd/languageservice/services/documentSymbols.js:19:30
```