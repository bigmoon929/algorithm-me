/**
 * 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量).）。
 *
 * @see [剑指 Offer 15. 二进制中1的个数](https://leetcode.cn/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/description/?favorite=xb9nqhhg)
 * @param {number} n - a positive integer
 * @return {number}
 */
export const hammingWeight = function (n) {
  let count = 0
  while (n !== 0) {
    count++
    n &= n - 1
  }
  return count
}
