const fs = require("fs");
const path = require("path");

module.exports = (name, classComponent = false) => {
  name = `${name[0].toUpperCase()}${name.substring(1)}`;
  const classComponentTempPath = path.join(__dirname, "../templates/classComponentTemplate.js"),
    functionComponentTempPath = path.join(__dirname, "../templates/functionalComponentTemplate.js");
  try {
    let funcTemp;
    classComponent
      ? (funcTemp = fs.readFileSync(classComponentTempPath, "utf8"))
      : (funcTemp = fs.readFileSync(functionComponentTempPath, "utf8"));
    const contents = funcTemp.replace(/Name/g, name);
    fs.writeFileSync(`./${name}.js`, contents, "UTF-8");
  } catch (err) {
    console.error(err.message);
  }
};
