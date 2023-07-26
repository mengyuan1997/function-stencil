
# 工具函数库

> 在项目中遇到的一些常用的工具函数，方便以后使用
> 支持 commonjs 和 es6 模块引入
> 支持 tree shaking
> 支持 typescript

# 日期处理

关于日期处理的工具函数

### 获取输入日期是当年第几天
默认接受一个参数，参数为日期字符串，返回值为当年第几天，如果不传参数则返回当天是当年第几天

```js
import { getDayOfYear } from 'tool-gallery';

let dayNum = getDayOfYear('2023-01-01'); // 1

dayNum = getDayOfYear('2023-12-31'); // 366
```
 

