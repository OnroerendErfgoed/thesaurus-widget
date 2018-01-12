# thesaurus-widget
A widget that can interact with a thesaurus api to select concepts.

This widget is a pluggable component that acts as a frontend to a thesaurus api provided by [athramisis](https://github.com/OnroerendErfgoed/atramhasis). This API has following endpoints: http://atramhasis.readthedocs.io/en/latest/services.html

The widget is based on this [skeleton](https://github.com/manuel-guilbault/aurelia-skeleton-plugin-typescript). 

Read the [specs](./docs/specs.md).

## Building the code

To build the code, you can run:

  ```shell
  npm run build
  ```
  
You will find the compiled code in the `dist` folder, available in five module formats: AMD, CommonJS, ES2015, ES2017 and System.
The dist folder needs to be checked in in git to be able to reuse in other projects.


## Running The Tests

You can run the tests with this command:

  ```shell
  npm test
  ```

Alternatively, you can run the tests in watch mode with this command:

```shell
npm run develop
```


## Installing the plugin

### In a CLI-based app


```shell
npm install onroerenderfgoed/thesaurus-widget#{version} --save
```

Add this to the aurelia.json config: 
(can be found at metaaldetectievondstmeldingen/metaaldetectievondstmeldingen/static/formulier/aurelia_project/)
```json
  {
    "name": "thesaurus-widget",
    "main": "index",
    "path": "../node_modules/thesaurus-widget/dist/amd",
    "resources": ["**/*.{css,html}"]
  }
```

Add the plugin in main.ts
```javascript
  aurelia.use
    .standardConfiguration()
    .plugin('thesaurus-widget')
```

Use the components in a template

```html
  <require from="thesaurus-widget/oe-thesaurus-input"></require>
  <require from="thesaurus-widget/oe-thesaurus-tree"></require>
  ...
  
  <div>
    <oe-thesaurus-input value.bind="value" type.bind="type" base-url.bind="baseUrl" minlength.bind="minlength" label="label">
      <template replace-part="suggestion">${suggestion.label}</template>
    </oe-thesaurus-input>
    <oe-thesaurus-tree value.bind="value" type.bind="type" base-url.bind="baseUrl"></oe-thesaurus-tree>
  </div>
    
```


