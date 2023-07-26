## 说明

一个函数库应该具备：

- npm版本管理
- 支持按需引入
- 提供多种模块导出方式  ES modules 和 CommonJS
- 通过单元测试
- 文档
   然后我们需要ts语法，加上了
- 支持ts语法
   为了团队维护方便，加上了
- 自动化构建模板  添加、删除
- 构建工具选择`rollup`  或者 `webpack`



## 创建基本框架

1. 初始化文件夹   `git init`  `npm init`
2. 创建文件夹与远程仓库进行绑定
3. 添加文件`README.md`，创建文件夹`src`，添加文件`index.ts`
   1. `README.md`是说明文件
   2. `index.ts`函数文件

## 配置环境

### 设置npm镜像源（可选）

在根目录创建`.npmrc`

输入内容

```shell
registry=http://banmagnas.fun:8660/
```

### 安装`rollup`

安装rollup

```shell
npm i  rollup -D
```

安装必要的rollup插件

```shell
npm i  @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-typescript -D
```

插件作用说明：

+ `@rollup/plugin-commonjs`：`rollup`本身是不支持`CommonJS`的，使用了这个插件，就可以解析CommonJS模块了

+ `@rollup/plugin-node-resolve`：`rollup` 无法识别 `node_modules` 中的包，帮助 `rollup` 查找外部模块，然后导入

+ `@rollup/plugin-typescript`：`rollup中`使用`typescript`必备的插件

在安装`@rollup/plugin-typescript`插件时提示我们需要`tslib`和`typescript`，所以我们安装这两个第三方库

```shell
npm i tslib typescript -D
```


如果需要进行代码压缩和清除注释等需要安装如下插件

```shell
npm i  rollup-plugin-terser rollup-plugin-cleanup  rollup-plugin-json -D
```

+ `rollup-plugin-terser`插件用于代码压缩
+ `rollup-plugin-cleanup`插件用于去除无效代码
+ `rollup-plugin-json`插件处理`json`文件

```shell
npm i  rollup @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-typescript tslib typescript  rollup-plugin-terser rollup-plugin-cleanup  rollup-plugin-json -D
```

### 配置ts

在终端中执行`npx tsc --init`命令，生成`tsconfig.json`文件，修改文件

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /*语言与环境 */
    "target": "es5",                                    /* 为发出的 JavaScript 设置 JavaScript 语言版本，并包含兼容的库声明. */
     "lib": ["dom", "dom.iterable", "esnext"],          /* 指定一组描述目标运行时环境的捆绑库声明文件. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */
    // "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
    // "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */

    /* 模块 */
//    "module": "commonjs",                                /* 指定生成的模块代码 */
    "module": "esnext",                                /* 指定生成的模块代码 */
     "rootDir": "./",                                  /* 指定源文件中的根文件夹.  // 指定输出文件目录(用于输出)，用于控制输出目录结构 */
     "moduleResolution": "node",                     /* 指定 TypeScript 如何从给定模块说明符查找文件*/
     "baseUrl": "",                                  /* 指定基目录以解析非相对模块名称。 */
     "paths": {
        "@/*": ["src/*"]
     },                                      /* 指定一组将导入重新映射到其他查找位置的条目. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */
    // "allowImportingTsExtensions": true,               /* Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set. */
    // "resolvePackageJsonExports": true,                /* Use the package.json 'exports' field when resolving package imports. */
    // "resolvePackageJsonImports": true,                /* Use the package.json 'imports' field when resolving imports. */
    // "customConditions": [],                           /* Conditions to set in addition to the resolver-specific defaults when resolving imports. */
     "resolveJsonModule": true,                        /* 启用导入 .json 文件。 */
    // "allowArbitraryExtensions": true,                 /* Enable importing files with any extension, provided a declaration file is present. */
    // "noResolve": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript 支持 */
     "allowJs": true,                                  /*允许 JavaScript 文件成为程序的一部分。使用“checkJS”选项从这些文件获取错误. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

    /* 发出 */
     "declaration": true,                              /* 从项目中的 TypeScript 和 JavaScript 文件生成 .d.ts 文件.   是否自动创建类型声明文件*/
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
     "emitDeclarationOnly": true,                      /* 仅输出 d.ts 文件，而不是 JavaScript 文件. 只生成声明文件，而不会生成js文件 */
    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
    // "outDir": "./",                                   /* Specify an output folder for all emitted files. */
    // "removeComments": true,                           /* Disable emitting comments. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types. */
     "downlevelIteration": true,                       /* 发出更合规，但冗长且性能更低的 JavaScript 用于迭代. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */
     "declarationDir": "dist/types",                           /* 指定生成的声明文件的输出目录. 类型声明文件的输出目录 */
    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */

    /* 互操作约束 */
     "isolatedModules": true,                          /* 确保每个文件都可以安全地转译，而无需依赖其他导入. */
    // "verbatimModuleSyntax": true,                     /* Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file's format based on the 'module' setting. */
     "allowSyntheticDefaultImports": true,             /* 当模块没有默认导出时，允许“从 y 导入 x”。 */
    "esModuleInterop": true,                             /* 发出额外的 JavaScript 以简化对导入 CommonJS 模块的支持。这将启用“allowSyntheticDefaultImports”以实现类型兼容性 */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* 确保进口时大小写正确. */

    /* Type Checking */
    "strict": true,                                      /* 启用所有严格的类型检查选项. */
     "noImplicitAny": false,                            /* 为具有隐含“any”类型的表达式和声明启用错误报告. */
    // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
    // "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
     "noFallthroughCasesInSwitch": true,               /* 为 switch 语句中的故障案例启用错误报告. */
    // "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

    /* 完整性 */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true                                 /* 跳过类型检查所有 .d.ts 文件。 */
  },
  "include": ["src"]
}
```

如果要为工具库生成类型声明文件则必须有如下配置

```json
{
	 // 是否自动创建类型声明文件
    "declaration": true,
    // 类型声明文件的输出目录
    "declarationDir": "dist/types",
    // 只生成声明文件，而不会生成js文件
    "emitDeclarationOnly": true,
    // 指定输出文件目录(用于输出)，用于控制输出目录结构
    "rootDir": "src",
}
```

为什么要为工具库生成类型声明文件呢？
主要是为了避免引入 JS 库的时候，遇到这样的报错：无法找到模块“@superying/remote-ui”的声明文件，让工具库有更好的typescript类型支持，且生成类型声明文件之后可以在引入工具库之后很方便的校验和看到工具方法的出入参。

### 配置rollup

在项目根目录下新建文件`rollup.config.js`，关于`rollup`的详细配置可参考[官网教程](https://www.rollupjs.com/)。对于我们的工具库而言，`rollup`可简单配置如下：

```js
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
```

## 编写工具函数

在根目录下新建`src`目录，在`src`目录下新建`index.ts`编写我们的工具函数；这里我们先写一个简单的工具函数

```ts
// 返回传入的日期是今年的第几天,如果不传参数则默认是当前日期
export const dayOfYear = (date?: Date | string): number => {
  let formatDate = null;
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
```

### 拆分函数

在`src`文件夹下面创建`dateTools`文件夹，创建`dayOfYear`文件夹，然后创建`index.ts`

在`src/index.ts`文件中导出函数

```ts
export * from "./dateTools/dayOfYear/index";
```

这样每一类的函数都在一个文件夹里面了

### 完善package.json配置

创建打包命令、推送命令

```json
{
  "name": "stencil",
  "version": "1.0.0",
  "description": "描述信息",
  "main": "./dist/index.cjs.js",
  "module": "./dist/index.esm.js",
  "types": "./dist/types/src/index.d.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "dev": "rollup -w -c",
    "build:types": "tsc -b ./tsconfig.json",
    "build": "npm run build:types && rollup -c --bundleConfigAsCjs",
    "prepublish": "pnpm version && pnpm build"
  },
  "repository": "",
  "homepage": "",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@rollup/plugin-commonjs": "^25.0.0",
    "@rollup/plugin-node-resolve": "^15.1.0",
    "@rollup/plugin-typescript": "^11.1.1",
    "rollup": "^3.24.0",
    "rollup-plugin-cleanup": "^3.2.1",
    "rollup-plugin-json": "^4.0.0",
    "rollup-plugin-terser": "^7.0.2",
    "tslib": "^2.5.3",
    "typescript": "^5.1.3"
  }
}

```

- `main`是指`CommonJS`入口文件
- `module`是指`ESmodule`入口文件
- `types`ts类型放置的位置
- `files`需要上传到npm的文件夹
- `repository`仓库地址
- `homepage`主页
- `keywords`关键词
- `author`作者名称

## 单元测试

函数库必定要经过单元测试，这才是比较严谨的，而且一定要覆盖全

推荐用测试库[jest](https://link.juejin.cn?target=https%3A%2F%2Fwww.jestjs.cn%2F)，很多开源项目都在用

- 安装`jest`和`ts-jest`

```css
npm i jest --save-dev
npm i ts-jest --save-dev
```

创建`test`文件夹，创建模块文件夹`dayOfYear`，创建测试文件`dayOfYear.test,js`，编写测试方法

```java
/**
* 验证输入的日期是当年的第几天
*/
const {dayOfYear} = require('../../dist/index.cjs');

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
```

- 新建一个`jest.config.js`

  ```shell
  module.exports = {
    transform: {
      '^.+\\.tsx?$': 'ts-jest' // ts文件使用ts-jest
    }
  }
  ```

- 运行`jest`

  有时候直接运行`jest`会报错，那么就添加到命令行，通过命令行进行执行

  ![](http://updatafiles.banmag.cn/1686192759836.png)







## 项目测试

###  测试

####  链接包进行本地发布

1. 我们不需要发布库来测试它。npm 允许我们通过命令 `npm link`在本地链接库来模拟这个过程
2. 先对项目进行打包 `npm run build`
3. 然后本地发布命令: `npm link`

### 本地安装

1. 我们可以通过vue-cli或者 vite 创建一个vue项目
2. 然后再执行: `npm link <<package-name>>`,就会在把本地发布的库安装到这个项目的node_modules目录下
3. 这样本地测试代码是同步的，如果改了库的代码，在项目中会实时同步的，就不用在 `npm link <<package-name>>`

### 断开软链连接

- npm unlink 包名，如：npm unlink my-lh-tools

## 自动化构建

### 添加

如果我们现在要加一个`新函数` 我们会怎么做呢？

创建工具文件夹季文件，创建测试文件夹及文件，非常麻烦，非常繁琐，因此使用自动化的方式

**我们可以用`node文件操作`自动化这一繁琐的过程 ，主要是利用[node文件系统](https://link.juejin.cn?target=https%3A%2F%2Fwww.runoob.com%2Fnodejs%2Fnodejs-fs.html)**

我们在`tool`文件夹里新建一个`add.js`的node运行文件

需要注意  有些方法是不能进行测试的，列入获取时间戳的函数，因此就需要判断是添加单元测试，

以下方法会添加工具模块和入口文件，单元测试是选择性的创建

```js
const fs = require("fs");
const path = require("path");
const readline = require("readline");
// 具有第三个参数就创建测试，没有就不创建，只要有数据就可以
let command = process.argv[3];


// 终止
const exit = function (log) {
    console.error(log);
    process.exit(1);
};

// 打印方法
const myLog = function (text, path) {
    /*var black="\033[30m black \033[0m";
  var red="\033[31m red \033[0m";
  var green="\033[32m green \033[0m";
  var yellow="\033[33m yellow78979 \033[0m";
  var blue="\033[34m blue \033[0m";
  var popurse="\033[35m popurse \033[0m";
  var indigo="\033[36m indigo \033[0m";
  var white="\033[37m white \033[0m";
  var mix="\033[37;42m white \033[0m";
  console.log(black, red, green, yellow, blue, popurse, white);*/
    var popurse = "\033[35m 提示 \033[0m";
    process.stdout.write(popurse);
    var toolPathhint = "\033[31m " + text + " \033[0m";
    var toolPathPath = "\033[32m" + path + " \033[0m";
    console.log(toolPathhint, toolPathPath);
};
// 模块路径
const MODULES_PATH = path.join(__dirname, "../src");
// 单元测试路径
const TEST_PATH = path.join(__dirname, "../test");

// 主入口
const MAIN_PATH = path.join(__dirname, "../src/index.ts");

// 模块名称
const MODULES = process.argv[2];

if (!MODULES) {
    exit("请填入模块名称");
}
// 点的索引
let dotIndex = process.argv[2].indexOf(".");
// 模块名称
let moduleName = process.argv[2].slice(0, dotIndex);
// 工具名称
let toolName = process.argv[2].slice(dotIndex + 1);

// npm工具
// 模块路径
const MODEL_PATH = path.join(MODULES_PATH, moduleName);
// 工具路径
const OUT_PATH = path.join(MODEL_PATH, toolName); // 文件路径

// 单元测试
// 单元测试模块
const TEST_MODEL_PATH = path.join(TEST_PATH, moduleName);
// 单元测试工具
const TEST_OUT_PATH = path.join(TEST_MODEL_PATH, toolName); // 文件路径


// npm工具
// 判断是否有该模块
const isModule = fs.existsSync(MODEL_PATH);
if (!isModule) {
    fs.mkdirSync(MODEL_PATH);
    myLog("创建模块目录", MODEL_PATH);
}

// 判断是否有工具路径
const isExists = fs.existsSync(OUT_PATH);
if (isExists) {
    exit(`${OUT_PATH}目录已经存在`);
}

fs.mkdirSync(OUT_PATH);

myLog("创建工具目录", OUT_PATH);

if (command) {
    // 单元测试
    let isTestModule = fs.existsSync(TEST_MODEL_PATH);
    if (!isTestModule) {
        fs.mkdirSync(TEST_MODEL_PATH);
        myLog("创建测试模块目录", TEST_MODEL_PATH);
    }
    let isTestExists = fs.existsSync(TEST_OUT_PATH);
    if (isTestExists) {
        exit(`${MODULES}目录已经存在`);
    }
    fs.mkdirSync(TEST_OUT_PATH);
    myLog("创建测试工具目录", TEST_OUT_PATH);
}


// fs.mkdirSync(TEST_OUT_PATH)
// console.log('创建测试目录', TEST_OUT_PATH)

// 函数模版
const addFileTemp = `
  export const  ${toolName} =  (val:any) => {
    return val
  }
  `;
// 测试用例模版
const testTemp = `
    const {${toolName}} = require('../../../dist/index.cjs');
    describe('${toolName}', () => {
      it('结果通过啦', () => {
        expect(${toolName}('a')).toBe('a')
      })
    })
    `;
// 追加工具
const addMainTemp = `export * from './${moduleName}/${toolName}'\n`;

// 文件路径
const FILE_PATH = path.join(OUT_PATH, `/index.ts`);

const TEST_PATH_FILE = path.join(TEST_OUT_PATH, `${toolName}.test.js`);
// 写入文件
fs.writeFileSync(FILE_PATH, addFileTemp); //工具
if (command) {
    fs.writeFileSync(TEST_PATH_FILE, testTemp); //单元测试
}

myLog("创建新模块成功", `路径： src/${moduleName}/${toolName}`);
// 追加主入口 保留之前的数据
fs.appendFileSync(MAIN_PATH, addMainTemp);
myLog("追加主入口成功", "❀ ❀  ❀ ");

```

### 删除

当我们需要删除某个函数的时候也是很麻烦，因此我们同样写一个方法帮我们执行

会帮我们删除`src`目录下面的工具，单元测试以及入口文件

```shell
/**
 * @fileOverview 删除工具
 * @name delTools.js
 * @description 删除导出文件 工具文件及模块文件夹  测试文件和文件夹
 * @type 
 */
const fs = require('fs')
const path = require('path')
let argv = process.argv
/**
 *
 * @param text 文本
 * @param path
 * @param isWarn 是否警告
 */
const myLog = function (text, path, isWarn = false) {
    /*var black="\033[30m black \033[0m";
  var red="\033[31m red \033[0m";
  var green="\033[32m green \033[0m";
  var yellow="\033[33m yellow78979 \033[0m";
  var blue="\033[34m blue \033[0m";
  var popurse="\033[35m popurse \033[0m";
  var indigo="\033[36m indigo \033[0m";
  var white="\033[37m white \033[0m";
  var mix="\033[37;42m white \033[0m";
  console.log(black, red, green, yellow, blue, popurse, white);*/
    var popurse = "\033[35m 提示 \033[0m";
    var warn = "\033[33m 警告 \033[0m";
    let hint = isWarn === true ? warn : popurse
    process.stdout.write(hint);
    var toolPathhint = "\033[31m " + text + " \033[0m";
    var toolPathPath = "\033[32m" + path + " \033[0m";
    console.log(toolPathhint, toolPathPath);
};

/**
 * 删除入口文件中的导出语句
 * @param toolsPath  文件路径
 * @returns {void} 直接写入文件
 */
function delTools(toolsPath) {
    // 处理输入的路径
    let toolsPathArr = "./" + toolsPath.replace('.', '/')
//    获取 入口文件  数据
    let indexPath = path.join(__dirname, '../src/index.ts')
    let indexData = fs.readFileSync(indexPath, 'utf-8')
    const exportRegex = /export \* from ['"](.*?)['"]/g; // 导出语句的正则表达式
    let newCode = indexData; // 新代码
    let match;

    while (match = exportRegex.exec(indexData)) { // 遍历所有的导出语句
        // console.log('match',match)
        const exportPath = match[1]; // 获取当前导出语句中的路径
        // console.log('exportPath', exportPath, toolsPath)
        if (exportPath === toolsPathArr) { // 如果匹配到需要删除的路径

            newCode = newCode.replace(match[0], ''); // 删除该导出语句
        }
    }
// 将输入写入文件
    fs.writeFileSync(indexPath, newCode);
    myLog('导出入口修改成功', indexPath)

}


/**
 * 删除工具文件夹
 * @param toolsPath 文件路径
 */
function delFile(toolsPath) {
    let dotIndx = toolsPath.indexOf('.')
    let partitionIndex = dotIndx > -1 ? dotIndx : toolsPath.indexOf('/')
    let moduleName = toolsPath.slice(0, partitionIndex)
    let toolName = toolsPath.slice(partitionIndex + 1)
    // 模块路径
    let modulePath = path.join(__dirname, '../src', moduleName)
    // 工具路径
    let toolPath = path.join(modulePath, toolName)
    // 删除文件
    fs.unlink(path.join(toolPath, 'index.ts'), (err) => {
        if (err) {
            myLog('工具删除失败', path.join(toolPath, 'index.ts'), true)
            return
        }
        myLog('工具删除成功', path.join(toolPath, 'index.ts'))
        //     删除文件夹
        fs.rmdir(toolPath, (err) => {
            if (err) {
                myLog('工具文件夹未成功删除', toolPath, true)
                return
            }
            myLog('工具文件夹已成功删除', toolPath)
            //     删除文件夹
            fs.rmdir(modulePath, (err) => {
                if (err) {
                    myLog('模块文件夹未成功删除', modulePath, true)
                    return
                }
                myLog('模块文件夹已成功删除', modulePath)
            });
        });
    });


}

/**
 * 删除测试文件夹
 * @param toolsPath 文件路径
 */
function delTestFile(toolsPath) {
    let dotIndx = toolsPath.indexOf('.')
    let partitionIndex = dotIndx > -1 ? dotIndx : toolsPath.indexOf('/')
    let moduleName = toolsPath.slice(0, partitionIndex)
    let toolName = toolsPath.slice(partitionIndex + 1)
    // 模块路径
    let modulePath = path.join(__dirname, '../test', moduleName)
    // 工具路径
    let toolPath = path.join(modulePath, toolName)
    // 判断模块是否存在
    const isModule = fs.existsSync(modulePath);
    if (!isModule) {
        myLog('模块不存在', modulePath)

    } else {
        //     工具是否存在
        const isTool = fs.existsSync(toolPath);
        if (!isTool) {
            myLog('工具测试文件不存在', toolPath)

        } else {
            // 删除文件
            fs.unlink(path.join(toolPath, `${toolName}.test.js`), (err) => {
                if (err) {
                    myLog('工具测试文件删除失败', path.join(toolPath, `${toolName}.test.js`), true)
                    return
                }

                // console.log('工具删除成功');
                myLog('工具测试文件删除成功', path.join(toolPath, `${toolName}.test.js`))
            });
//     删除文件夹
            fs.rmdir(toolPath, (err) => {
                if (err) {
                    myLog('工具文件夹未成功删除', toolPath, true)
                    return
                }

                // console.log('工具文件夹已成功删除');
                myLog('工具测试文件夹已成功删除', toolPath)
                //     删除文件夹
                fs.rmdir(modulePath, (err) => {
                    if (err) {
                        myLog('测试模块文件夹未成功删除', modulePath, true)
                        return
                    }

                    // console.log('模块文件夹已成功删除')
                    myLog('测试模块文件夹已成功删除', modulePath)
                });
            });

        }
    }

}

delTools(argv[2])
delFile(argv[2])
delTestFile(argv[2])
```



添加对应的命令

```json
"add": "node ./tool/add.js",
"del": "node ./tool/delTools.js"
```



## 文档说明

文档说明是必不可少的，由于我的是发布到自己的npm源中，不好查找工具，因此添加`vuepress`作为文件说明

创建`vuepress`文件夹，初始化项目

创建如下结构目录

![](http://updatafiles.banmag.cn/1686194180639.png)



```bash
src
 ├── .vuepress
 │   ├── client.ts 
 │   ├── config.ts//vuepress的配置文件
 │   ├── navbar
 │   │   └── index.ts //导航
 │   ├── public
 │   │   ├── assets
 │   │   │   └── icon
 │   │   ├── favicon.ico
 │   │   ├── logo.png
 │   │   └── logo.svg
 │   ├── sidebar //侧边栏
 │   │   └── index.ts
 │   ├── styles //样式
 │   │   ├── config.scss
 │   │   ├── index.scss
 │   │   └── palette.scss
 │   └── theme.ts  //主题
 ├── dateTools.md //工具说明
 └── README.md //主页
```

- config.ts//vuepress的配置文件

  ```ts
  import { defineUserConfig } from "vuepress";
  
  
  
  
  import theme from "./theme.js";
  
  export default defineUserConfig({
    base: "/",
    host:"localhost",
    // 修改端口号
    port:9028,
  
    locales: {
      "/": {
        lang: "zh-CN",
        title: "工具库",
        description: "私人工具库",
      },
    },
  
    theme,
    plugins: [],
  
    shouldPrefetch: false,
  });
  
  ```

- index.ts //导航

  ```ts
  import { navbar } from "vuepress-theme-hope";
  
  export const zhNavbar = navbar([
    "/",
     {
      text: "日期",
      icon: "date",
      prefix: "/dateTools",
      link: "/dateTools",
    },
     
  ]);
  
  ```

- sidebar //侧边栏

  ```ts
  import {sidebar} from "vuepress-theme-hope";
  
  export const zhSidebar = sidebar({
      
      // webBase  web基础
      "/": [
          "",
          // 文件路径，显示名称
         
          "dateTools",
          
      ],
     
  
  
  });
  
  ```

  

- config.scss

  ```scss
  // you can change config here
  $code-lang: "css" "html" "js" "ts" "vue";
  
  ```

  

- index.scss 空文件

- palette.scss

  ```scss
  // you can change colors here
  // $theme-color: #096dd9;
  $theme-color: #2196f3;
  
  ```

  

- theme.ts  //主题

  ```ts
  import { hopeTheme } from "vuepress-theme-hope";
  import {  zhNavbar } from "./navbar/index.js";
  import {  zhSidebar } from "./sidebar/index.js";
  
  
  
  
  export default hopeTheme({
    // 主题色
    themeColor: {
      red: "#f26d6d",
      green: "#3eaf7c",
      orange: "#fb9b5f",
    },
    // 全屏
    fullscreen: true,
  
    // hostname: "https://banmag.cn",
  
    author: {
      name: "长夜",
      url: "https://banmag.cn",
    },
  
    // iconAssets: "iconfont",
    iconAssets: "//at.alicdn.com/t/c/font_3778457_2xj6cntj29p.css",
  
    logo: "/logo.png",
  
    // 仓库地址
    // repo: "http://banmagnas.fun:6080/project/vuepress2_frame.git",
  
  
    // docsDir: "demo/theme-docs/src",
  
    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  
    locales: {
      // "/": {
      //   // navbar
      //   navbar: zhNavbar,
  
      //   // sidebar
      //   sidebar: zhSidebar,
  
      //   footer: "Default footer",
  
      //   displayFooter: true,
  
      //   metaLocales: {
      //     editLink: "Edit this page on GitHub",
      //   },
      // },
  
      /**
       * Chinese locale config
       */
      "/": {
        // navbar
        navbar: zhNavbar,
  
        // sidebar
        sidebar: zhSidebar,
  
        footer: "长夜",
  
        // displayFooter: true,
        contributors:false,//是否显示页面贡献者
        lastUpdated:false,//是否显示页面最后更新时间
  
        // page meta
        // metaLocales: {
        //   editLink: "在 GitHub 上编辑此页",
        //   // editLink: "true",
        //   // contributors:'false',
        // },
      },
    },
  
    encrypt: {
      config: {
        // "/demo/encrypt.html": ["1234"],
        // "/zh/demo/encrypt.html": ["1234"],
      },
    },
  
    plugins: {
      // If you don't need comment feature, you can remove following option
      // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
      // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
      // 评论插件
      comment: {
        /**
         * Using Giscus
         */
  
        /* 
        App ID: 251991
  
  Client ID: Iv1.ae0f80a6a3ac18ee
        Client secrets  68dc47b41623901c01abc75345c4f77e3c4cc247
  
  name vuepress2giscus
      password   UYbEjDEBDgHFZiAv
  
  
  网址 https://pjukxcfzbjnquqbjfzmr.supabase.co
  
      anonpublic   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqdWt4Y2Z6YmpucXVxYmpmem1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY0NDg1NDgsImV4cCI6MTk4MjAyNDU0OH0.m79FqCfID72_18-lpt-4FlkT08mXxrWZDdhRh_O9ubg
        service_role  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqdWt4Y2Z6YmpucXVxYmpmem1yIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjQ0ODU0OCwiZXhwIjoxOTgyMDI0NTQ4fQ.w6inOpvl9pgEyzmAiy0mGDbMDcENvaV9VPHgCYXzwQU
        */
        // provider: "Giscus",
        // repo: "vuepress-theme-hope/giscus-discussions",
        // repoId: "R_kgDOG_Pt2A",
        // category: "Announcements",
        // categoryId: "DIC_kwDOG_Pt2M4COD69",
        // provider: "Giscus",
        // repo: "mengyuan1997/vuepress2giscus",
        // repoId: "R_kgDOISU3kw",
        // category: "Announcements",
        // categoryId: "DIC_kwDOISU3k84CSJEW",
  
        /**
         * Using Twikoo
         */
        // provider: "Twikoo",
        // envId: "https://twikoo.ccknbc.vercel.app",
  
        /**
         * Using Waline
         */
        // provider: "Waline",
        // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
      },
  
      // Disable features you don't want here
      // md文档提升
      mdEnhance: {
        align: true,
        attrs: true,
        chart: true,
        codetabs: true,
        container: true,
        demo: true,
        echarts: true,
        flowchart: true,
        gfm: true,
        imageSize: true,
        include: true,
        katex: true,
        lazyLoad: true,
        mark: true,
        mermaid: true,
        playground: {
          presets: ["ts", "vue"],
        },
        presentation: {
          plugins: ["highlight", "math", "search", "notes", "zoom"],
        },
        stylize: [
          {
            matcher: "Recommanded",
            replacer: ({ tag }) => {
              if (tag === "em")
                return {
                  tag: "Badge",
                  attrs: { type: "tip" },
                  content: "Recommanded",
                };
            },
          },
        ],
        sub: true,
        sup: true,
        tabs: true,
        vpre: true,
        vuePlayground: true,
      },
  // 提供渐进式网络应用程序支持
      pwa: {
        favicon: "/logo.png",
        cacheHTML: true,
        cachePic: true,
        appendBase: true,
        apple: {
          icon: "favicon",
          statusBarColor: "black",
        },
        msTile: {
          image: "/logo.png",
          color: "#ffffff",
        },
        manifest: {
          icons: [
            {
              src: "/logo.png",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/logo.png",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/logo.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/logo.png",
              sizes: "192x192",
              type: "image/png",
            },
          ],
          // shortcuts: [
          //   {
          //     name: "Demo",
          //     short_name: "Demo",
          //     url: "/demo/",
          //     icons: [
          //       {
          //         src: "/assets/icon/guide-maskable.png",
          //         sizes: "192x192",
          //         purpose: "maskable",
          //         type: "image/png",
          //       },
          //       {
          //         src: "/assets/icon/guide-monochrome.png",
          //         sizes: "192x192",
          //         purpose: "monochrome",
          //         type: "image/png",
          //       },
          //     ],
          //   },
          // ],
        },
      },
      // 版权信息插件
      copyright:{
        hostname:"http://banmagnas.fun:9822/",//域名
        author:"长夜",//作者
        global:true,//全局开启
      }
    },
  });
  
  
  
  ```

  

- dateTools.md //工具说明

  ~~~md
  # 日期处理
  
  关于日期处理的工具函数
  
  ### 获取输入日期是当年第几天
  默认接受一个参数，参数为日期字符串，返回值为当年第几天，如果不传参数则返回当天是当年第几天
  
  ```js
  import { getDayOfYear } from 'tool-gallery';
  
  let dayNum = getDayOfYear('2023-01-01'); // 1
  
  dayNum = getDayOfYear('2023-12-31'); // 366
  ```
  
  
  ### 将秒数转成时分秒
  默认接受一个参数，参数为秒数，返回值为时分秒字符串
  
  ```js
  import { secondToTime } from 'tool-gallery';
  
  let time = secondToTime(480); 
  // 结果是    08分00秒
  
  let  time = secondToTime(7200);
  // 结果是   02时00秒
  
  let  time = secondToTime(7310);
  // 结果是   02时01分50秒
  ```
  
  ~~~

  

- README.md //主页

  ```
  ---
  home: true
  icon: home2
  title: 首页
  heroImage: /logo.png
  heroText: 搬码工
  tagline: npm私包说明文档。
  actions:
    - text: 菜鸟起飞 💡
      link: /dateTools/
      type: primary
  copyright: false
  footer:  鲁ICP备20032241号 | Copyright © 2019-present Mr.Hope
  ---
  
  
  ```

  

安装依赖

```shell
npm i @vuepress/client  @vuepress/plugin-register-components vue vuepress vuepress-theme-hope
```

```json
"scripts": {
    "build": "vuepress build src",
    "dev": "vuepress dev src --clean-cache",
    "docs:dev": "vuepress dev src",
    "serve": "cd src/.vuepress/dist && npx serve"
  },
  "devDependencies": {
    "@vuepress/client": "2.0.0-beta.51",
    "@vuepress/plugin-register-components": "^2.0.0-beta.51",
    "vue": "^3.2.29",
    "vuepress": "2.0.0-beta.51",
    "vuepress-theme-hope": "2.0.0-beta.110"
  },
  "dependencies": {}
```

这样我们就有了真正的文件说明，但是在发布npm包的时候不会发布上去，只会上传跟目录下面的说明文件

## 创建npm说明文件

我们把函数的使用方法写在了`vuepress`中，在复制到根目录的说明文件中比较麻烦，而且浪费时间，因此我们直接板鞋一个脚本帮我们做这件事情

在`tool`文件夹中创建`createdDocs`文件夹，创建三个文件分别是

+ getFile.js  获取文件夹下面所有文件和获取文件名称

```js

const fs = require("fs");

const getFilesAndFoldersInDir = (path) => {
  const items = fs.readdirSync(path);
  const result = [];
  items.forEach((item) => {
    const itemPath = `${path}/${item}`;
    const stat = fs.statSync(itemPath);
    if (stat.isDirectory()) {
      let data = {
        // 文件夹
        type: "folder",
        name: item,
        path: itemPath,
      };
      let children = getFilesAndFoldersInDir(itemPath);
      if (children && children.length) {
        data.children = children;
      }
      result.push(data);
    } else {
      // 文件
      result.push({
        type: "file",
        name: item,
        path: itemPath,
      });
    }
  });
  return result;
};

const getFileName = (fileName) => {
  let index = fileName.lastIndexOf(".");
  return fileName.substring(0, index);
};

module.exports = {
    getFilesAndFoldersInDir,
    getFileName
}

```

+ index.js  生成说明文件的脚本

```js
// 判断是否有值  有值就是npm打包  没值就是私库打包
let command =  process.argv[2];

// 将拆分开的说明文档合并为一个 README.md 文件
const fs = require("fs");
const path = require("path");
const { getFilesAndFoldersInDir, getFileName } = require("./getFile");
// 获取根目录下的 README.md 文件
let PATH = path.join(__dirname, "../../README.md");

// 获取 docs 目录下的所有文件和文件夹
let fileListAll = getFilesAndFoldersInDir(path.join(__dirname, "../../vuepress/src"));

// 获取 docs 目录下的所有文件和文件夹
let fileList = [];
// 获取文件名称
fileListAll.forEach((item) => {
  if(item.name === '.vuepress'){
  // 什么也不执行，  相当于忽略这个文件夹
  }else   if (item.type === "folder" ) {
    item.children.forEach((child) => {
      fileList.push({ ...child, name: getFileName(child.name) });
    });
  } else {
    // fileList.push(item)
    fileList.push({ ...item, name: getFileName(item.name) });
  }
});

// 过滤掉 index 文件
// fileList = fileList.filter(item => (item.name !== 'index' && item.name !== 'README'))
fileList = fileList.filter((item) => !["index", "README"].includes(item.name));

// console.log('fileList',fileList)
// 读取所有 markdown 文件

// 读取说明文件
const README = fs.readFileSync(path.join(__dirname, "./README.md"), "utf-8") + "\n";
console.log('README',README)
// 获取文件的标题  私库不支持
// 定义正则表达式，从 Markdown 中获取标题信息
const regex = /^(#+)\s+(.*)/gm;
const result = [];
let match;

// 射中标题
let titleList = "";
//设置文件内容
let mainContent = "";
// 读取所有 markdown 文件并设置文件内容
fileList.map((item) => {
  let fileContent = fs.readFileSync(item.path, "utf-8");
  // 设置文件内容
  mainContent += `${fileContent} \n`;
  //  获取标题
  while ((match = regex.exec(fileContent))) {
    // 获取标题级别（# 的数量）
    const level = match[1].length;
    // 获取标题内容
    const title = match[2];
    result.push({ level, title });
  }
});

result.map((item) => {
  let title = item.title;
  titleList += `[${title}](# ${title}) \n\n`;
});
let readme
console.log('command',command)
if(command){
    readme = `
${README}
${titleList}
${mainContent}
`;
}else{
    readme = `
${README}
${mainContent}
`;
}
// 输出 readme 文件内容

fs.writeFileSync(PATH, readme);
/*

// 读取所有 markdown 文件

// 读取说明文件
const README = fs.readFileSync(path.join(__dirname, "./README.md"), "utf-8") + "\n";
// 获取文件的标题  私库不支持
// 定义正则表达式，从 Markdown 中获取标题信息
const regex = /^(#+)\s+(.*)/gm;
const result = [];
let match;

// 射中标题
let titleList = "";
//设置文件内容
let mainContent = "";
// 读取所有 markdown 文件并设置文件内容
fileList.map((item) => {
  let fileContent = fs.readFileSync(item.path, "utf-8");
  // 设置文件内容
  mainContent += `${fileContent} \n`;
  //  获取标题
  while ((match = regex.exec(fileContent))) {
    // 获取标题级别（# 的数量）
    const level = match[1].length;
    // 获取标题内容
    const title = match[2];
    result.push({ level, title });
  }
});

result.map((item) => {
  let title = item.title;
  titleList += `[${title}](# ${title}) \n\n`;
});
let readme
console.log('command',command)
if(command){
    readme = `
${README}
${titleList}
${mainContent}
`;
}else{
    readme = `
${README}
${mainContent}
`;
}


// 输出 readme 文件内容

fs.writeFileSync(PATH, readme);*/

```

+ README.md  npm包说明文件

```md
# 工具函数库

> 在项目中遇到的一些常用的工具函数，方便以后使用
> 支持 commonjs 和 es6 模块引入
> 支持 tree shaking
> 支持 typescript
```

然后我们配置命令

```
"createdDoc": "node tool/createdDocs/index.js",
"createdNpmDoc": "node tool/createdDocs/index.js --npm",
```

这样我们就能够自动获取`vuepress`文件中写的文档说明内容和npm包头部内容，并且自动添加到根目录中的说明文件

### 发布npm包

#### 账号准备

发布npm包需要我们先有一个npm账号，如果没有npm账号的话需要先注册一个。

注册网址：www.npmjs.com，根据提示进行账号注册即可

#### 私包注册

> 输入以下命令后开始注册用户

```bash
npm adduser
```

![](http://updatafiles.banmag.cn/1686199223514.png)

### 登陆账号并验证是否登录成功

```bash
npm login
npm who am i
```

### 登录npm账号

执行npm login命令即可根据提示登录npm账号；

如果顺利的话根据提示依次输入用户名、密码、邮箱和验证码之后即可顺利登录；
如果不顺利的话可能会遇到如下问题Error: 500 Internal Server Error - PUT https://registry.npm.taobao.org/-/user/org.couchdb.user:linshen，这个错误时因为没有设置npm源导致的，我们在终端执行如下命令即可，npm config set registry https://registry.npmjs.org/ ；然后重新执行npm login即可正常登录。

登录成功之后会有如下提示Logged in as xxx on https://registry.npmjs.org/.
![](http://updatafiles.banmag.cn/1685676583651.png)

### 发布npm包

首次发布

成功登录npm账号之后执行如下命令即可发布npm包

```shell
npm publish
```

发布成功之后会有如下提示：

![](http://updatafiles.banmag.cn/1685676601275.png)

同时会向你的邮箱发送一封发布成功的邮件，然后我们就可以在npm上搜索到自己发布的npm包，就可以正常当做第三方依赖添加进项目使用了。

![](http://updatafiles.banmag.cn/1685676639904.png)

更新npm包

更新npm包两步走：

第一步：执行`npm version <版本号类型>`

第二步：执行 `npm publish`

执行第一步的时候有可能会报错，如下图：

![](http://updatafiles.banmag.cn/1685676888094.png)

这个报错是因为我们的代码还没有提交，提交代码之后就可以正常执行了。

![](http://updatafiles.banmag.cn/1685676927394.png)

重新npm publish之后会提示我们新的版本已经发布成功了。

![](http://updatafiles.banmag.cn/1685676960681.png)

删除npm包

```shell
npm unpublish <包名> -force
```

**注意：**删除后需要等24h后才能重新发布同名的npm包

## 自动化发包

`cimi`是一款全自动npm发包工具，一行命令帮助你git replase、创建git tag、发布npm包。

```bash
# 全局安装cimi
npm i cimi -g
# 本地安装cimi
npm i cimi -D
```

Cimi自动生成新版本号，自动生成commit message，创建tag，push到github，最后发布到npm中，整个过程只需要一行命令，解放你的双手！



通过一行`cimi patch master`，完成了`手改版本号`、`git add/commit`、`git push`、`git taps`、`npm publish`所有任务。

### Cimi修改版本规则

`Cimi`共有三种规则，来进行发包，其实也就是确定版本号。

- `cimi patch` 更新一个小版本，如1.1.0 -> 1.1.1，如bug修复;
- `cimi minor` 更新一个中版本，如1.1.0 -> 1.2.0，如新增功能;
- `cimi major` 更新一个大版本，如1.1.0 -> 2.1.0，如重构架构;

而分支默认为`master`，如果主分支为其他分支，应这样使用:

```
cimi patch main` `cimi patch beta
```


## 



## 整理`package.json`中的启动命令

```json
"dev": "rollup -w -c", /* 没有用处 */
"build:types": "tsc -b ./tsconfig.json", /* 生成函数的type */
"build": "npm run build:types && rollup -c --bundleConfigAsCjs", /* 打包npm包 */
"prepublish": "pnpm version && pnpm build", /* 发布npm包 */
"test": "jest", /* 单元测试 */
"add": "node ./tool/add.js",/* 添加工具函数 */
"del": "node ./tool/delTools.js",/* 删除工具函数 */
"createdDoc": "node tool/createdDocs/index.js",/* 创建私有库文档说明 */
"createdNpmDoc": "node tool/createdDocs/index.js --npm",/* 创建npm官方文档说明 */
"npmbag": "npm run build && cimi patch master",/* 自动化部署 */
"all": "npm run createdDoc && npm run test && npm run npmbag ",/* 创建文档说明并上传npm包 */
"doc:dev":"cd toolGallery && npm run dev",/* 启动vuepress项目文档 */
"doc:build":"cd toolGallery && npm run build",/* 打包vuepress项目文档 */
"doc:preview": "cd toolGallery && npm run serve",/* 预览vuepress项目文档 */
"doc:serve":"npm run doc:build && npm run doc:preview"/* 打包并预览vuepress项目文档 */
```

