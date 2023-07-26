/**
 * @description 返回传入的日期是今年的第几天,如果不传参数则默认是当前日期
 * @param date 日期
 * @returns number 今年的第几天
 * @example
 */
export const dayOfYear = (date?: Date | string): number => {
  let formatDate:Date|null = null;
  if (!date) {
    formatDate = new Date();
  } else {
    formatDate = typeof date === "string" ? new Date(date) : date;
  }
  // 如果传入的是无效的字符串,那么就默认是当前日期
  if (!formatDate.getFullYear) {
    formatDate = new Date();
  }
  const year = formatDate.getFullYear();
  const firstDayOfYear = new Date(year, 0, 0);
  const timeGap = formatDate.getTime() - firstDayOfYear.getTime();
  return Math.floor(timeGap / 1000 / 60 / 60 / 24);
};