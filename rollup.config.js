// 使用 rollup-plugin-node-resolve 插件来处理外部模块（rollup默认无法处理外部模块，也就是说无法解析打包从npm上下载使用的包，使用这个插件可以帮助我们使用）
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
// 来处理导入的commonjs模块的包（rollup默认只支持ES6模块的包）
import commonjs from '@rollup/plugin-commonjs';
// @rollup/plugin-terser` 是一个用于压缩 JavaScript 代码的插件。使用该插件可以大幅减小代码体积，提高应用程序的性能
import {terser} from 'rollup-plugin-terser';
// `rollup-plugin-cleanup` 是一个用于清理、优化和压缩 JavaScript 代码的 Rollup 插件.
import cleanup from 'rollup-plugin-cleanup';
// 插件来处理json文件
import json from 'rollup-plugin-json'
import pkg from './package.json'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs'
        },
        {
            file: pkg.module,
            format: 'es'
        }
    ],

    plugins: [
        resolve(), commonjs(), json(), typescript(), terser(), cleanup()
    ]
};