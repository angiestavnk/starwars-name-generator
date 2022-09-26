# fake-starwars-name

## Installation

This package is available via npm:

```
npm i fake-starwars-name
```

## Usage

```javascript
const { fakeStarWarsName, names } = require('fake-starwars-name');

fakeStarWarsName(param);
// Output random name which consist of 'param' words,
// where param is value between 2 and 5;

console.log(names);
// Output list of all names