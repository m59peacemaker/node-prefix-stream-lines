var test = require('tape')
var prefix = require('../')

test('prefixes lines', t => {
  t.plan(4)
  const s = prefix('_')
  const input = [
    'a\n',
    'b\n',
    'c\nd\n'
  ]
  const expect = input.join('')
    .split('\n')
    .map(l => '_' + l + '\n')
  s.on('data', data => {
    const sData = String(data)
    t.equal(sData, expect[t.assertCount], sData)
  })
  input.forEach(item => s.write(item))
  s.end()
})
