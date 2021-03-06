
## Specs

Original specs: https://github.com/OnroerendErfgoed/inventaris/issues/22#issue-239965138

### Version 0.1
- this should be a custom [Aurelia](http://aurelia.io/) component that can be used in other Aurelia projects
- the component can interact with the api of a thesaurus
- the user can select a concept using a text input field with autocompletion:
![autocomplete](./thesaurus-autocomplete.png "thesaurus autocomplete")
- the user can select a concept usign a popup that contains a tree of the thesaurus:
![tree](./thesaurus-tree.png "thesaurus tree")
- the component has a bindable property with the selected concept (make this an array for future enhancements)
- the component can be configured with:
  - a uri to a specific thesaurus (e.g. https://dev-thesaurus.onroerenderfgoed.be/conceptschemes/MATERIALEN)
  - the way a user can select a concept ('autocomplete','tree','both')
  - if the component is a multiselect or not ('true','false'). This version only supports false
- add meaningfull, unique class names to the html elements and an example style sheet (.scss)
- there should be isolated test pages where the component can be tested manually
- there should be useful unit & functional tests

### Version 0.2
- make the component a multiselect element; interface tbt
- add extra configuration option
  - a specific starting point inside the thesaurus (a collection) for searching concepts, that will be used as 'root'
- ....?
