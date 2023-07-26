
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


