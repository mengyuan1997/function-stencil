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
