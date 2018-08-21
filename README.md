[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)

# Poly Storex
This is web component allows use Stores on Polymer 2 through a Mixin.

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

## Usage
First just import and add the ```poly-storex``` component to your app, like this:
```html
<link rel="import" href="../poly-storex.html">
<link rel="import" href="./elements/my-app.html">

<poly-storex></poly-storex>
<my-app></my-app>
```
Also you can add the ```poly-storex``` component wherever you want use it.

Second import and extends your components where you want to share the states of the store:
```html
<link rel="import" href="../../poly-storex-mixin.html">
```
```js
class MyApp extends PolyStorexMixin(Polymer.Element, 'my-app') {
    static get is() { return 'my-app'; }
    static get properties () {}
    connectedCallback () {
      super.connectedCallback();
    }
  }
```
Don't forget call the ```super.connectedCallback()``` function.

Later, just define your mutations and call the commit function like this:
```js
this.mutations = {
  initStates (state) {
    state.dispatch({
      visibility: {
        summary: false,
        origin: true,
        receiver: false,
        newReceiver: false,
        operation: false,
        confirmOperation: false,
        next: ''
      }
    })
  }
}
this.commit('initStates');
```
And finally in the others components where you want to share the states, just bind the state property like this:
```html
<template is="dom-if" if="{{state.visibility.origin}}">
    <div>
        <h4>{{title}}</h4>
        <p>
            This is another component.
        </p>
    </div>
</template>
```
Note: remember that this is the basic example below there is more examples with more options.

### Mutations with payload
When you want to change any state with a some structure and some values, there is the payload param:
```js
this.mutations = {
  changeTitle (state, payload) {
    state.dispatch({
      title: payload.title
    })
  }
}
this.commit('changeTitle', { title: 'My new title' });
```

### Mutations with a path
Also there is a way to change any state with a some path, this help us to apply a change in a sub-property of the state object:
```js
// suppose that our title property is inside of state.main.
this.mutations = {
  changeSubs (state, payload) {
    state.dispatch({ title: payload.title }, 'main');
  },
  // in this case our prop is inside of state.main.header
  changeSubsHeader (state, payload) {
    state.dispatch({ title: payload.title }, 'main.header');
  }
}
this.commit('changeSubs', { title: 'My subtitle' });
```

### Mutations with combiners
When you have many mutations functions is better to have it in separated files and when you want use all in a single object, to do this, there is the combiner option:

generic-mutations.js
```js
const genericMutations = {
  initStates (state) {
    state.dispatch({ title: 'Default' })
  }
}
```
headers-mutations.js
```js
const headerMutations = {
  changeTitle (state, payload) {
    state.dispatch({ title: payload.title }, 'main.header')
  }
}
```
main-mutations.js
```js
const mainMutations = {
  changeTitle (state, payload) {
    state.dispatch({ title: payload.title }, 'main')
  }
}
```
my-app.html
```html
<script src="generic-mutations.js"></script>
<script src="headers-mutations.js"></script>
<script src="main-mutations.js"></script>
<script>
this.combinersMutations({ genericMutations, 
                          headersMutations, 
                          mainMutations })
this.commit('changeTitle', 
            { title: 'My new title' }, 
            'mainMutations');
</script>
```

## Demo inline
<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="./demo/elements/header-component.html">
    <link rel="import" href="./demo/elements/main-component.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<header-compoent></header-compoent>
<main-component></main-component>
```
## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

TODO: Write history

## Credits

TODO: Write credits

## License

TODO: Write license