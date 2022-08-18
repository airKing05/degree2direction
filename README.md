# Foobar

Foobar is a Python library for dealing with word pluralization.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/degrees-to-compass) to install foobar.

```bash
npm install degrees-to-compass
```

## Usage

```js
const converter = require('degrees-to-compass');

# returns 'DIRECTION ON COMPASS'
converter.convert('90') // "→ E"

# returns 'geese'
converter.convert('250') // "← W"
```
