const duplex = require('duplexer')
const split = require('split')
var through = require('throo')

const prefixStream = prefix => {
  const a = split(null, null, {trailing: false})
  const b = through((push, chunk, enc, cb) => {
    push(`${prefix}${chunk}\n`)
    cb()
  })
  const ab = a.pipe(b)
  return duplex(a, ab)
}

module.exports = prefixStream
