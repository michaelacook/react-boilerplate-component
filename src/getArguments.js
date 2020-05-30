module.exports = () => {
  if (process.argv.length > 2) {
    return process.argv.slice(2);
  }
};
