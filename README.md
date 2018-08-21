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