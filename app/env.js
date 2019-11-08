module.exports = () => {
  let mode = 'dev';
  process.argv.map((argv, index) => {
    if (argv.toLowerCase() == '--mode') {
      mode = process.argv[index + 1];
    }
  });
  return mode;
};
