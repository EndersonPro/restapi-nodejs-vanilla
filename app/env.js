module.exports = () => {
  // modo por defecto
  let mode = 'local';
  process.argv.map((argv, index) => {
    if (argv.toLowerCase() == '--mode') {
      mode = process.argv[index + 1];
    }
  });
  return mode;
};
