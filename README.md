# prefix-stream-lines

Streaming line prefixer.

## install

```sh
npm install prefix-stream-lines
```

## example

```js
const prefixLines = require('prefix-stream-lines')

process.stdin
  .pipe(prefixLines('foo | '))
  .pipe(process.stdout)
```

## API

### `prefixLines(prefix)`
