import { hammingWeight } from '../../src/for-offer/hamming-weight.js'

describe('hammingWeight', () => {
  it('should return the number of 1s in the binary representation of the given number', () => {
    expect(hammingWeight(0)).toBe(0)
    expect(hammingWeight(1)).toBe(1)
    expect(hammingWeight(2)).toBe(1)
    expect(hammingWeight(3)).toBe(2)
    expect(hammingWeight(4)).toBe(1)
    expect(hammingWeight(5)).toBe(2)
    expect(hammingWeight(6)).toBe(2)
    expect(hammingWeight(7)).toBe(3)
  })
})
