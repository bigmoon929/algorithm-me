/**
 * 生成从1到最大的n位数
 *
 * @see [剑指 Offer 17. 打印从1到最大的n位数](https://leetcode.cn/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/?favorite=xb9nqhhg)
 * @param {number} n - 数字的位数
 * @return {number[]} - 从 1 到最大的 n 位数的数组
 */
export function printNumbers(n) {
  const maxNum = Math.pow(10, n) - 1
  if (maxNum > Number.MAX_SAFE_INTEGER) {
    return printBigNumbers(n)
  }

  const res = new Array(Math.pow(10, n) - 1).fill(null)
  for (let i = 1; i <= maxNum; i++) {
    res[i - 1] = i
  }
  return res
}

const printBigNumbers = function (n) {
  let res = []
  const dfs = (cur, n) => {
    if (cur.length === n) {
      res.push(Number(cur))
      return
    }
    for (let i = 0; i < 10; i++) {
      dfs(cur + i, n)
    }
  }
  dfs('', n)
  res = res.slice(1)
  return res
}

// 如果能使用BigInt呢？
export function printNumbers2(n) {
  const maxNum = BigInt(Math.pow(10, n)) - BigInt(1)
  const res = new Array(Number(maxNum)).fill(null)
  for (let i = 1; i <= maxNum; i++) {
    res[i - 1] = i
  }
  return res
}
