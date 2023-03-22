import { printNumbers } from '../../src/for-offer/print-numbers.js'

const assert = require('assert')

describe('printNumbers', () => {
  it('should print numbers with given length', () => {
    const res = printNumbers(1)
    assert.deepEqual(res, [1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
