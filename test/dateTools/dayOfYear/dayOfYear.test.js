/**
* 验证输入的日期是当年的第几天
*/
const {dayOfYear} = require('../../../dist/index.cjs.js');

test('2020-01-01 返回1', () => {
    expect(dayOfYear('2020-01-01')).toBe(1)
})
test('2020-02-01 返回32', () => {
    expect(dayOfYear('2020-02-01')).toBe(32)
})

test('2020-03-01 返回61', () => {
    expect(dayOfYear('2020-03-01')).toBe(61)

})
test('2020-04-01 返回92', () => {
    expect(dayOfYear('2020-04-01')).toBe(92)

})