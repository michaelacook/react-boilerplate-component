const fs = require("fs");

module.exports = (name, classComponent = false) => {
  name = `${name[0].toUpperCase()}${name.substring(1)}`;
  const classComponentTempPath = "react-boilerplate-component/templates/classComponentTemplate.js",
    functionComponentTempPath = "react-boilerplate-component/templates/functionalComponentTemplate.js";
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
