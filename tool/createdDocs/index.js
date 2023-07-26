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
