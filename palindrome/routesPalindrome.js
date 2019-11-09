const serverPalindrome = require('./serverPalindrome');

serverPalindrome.post('/palindrome', (req, res) => {
  var body = '';
  req.on('data', data => {
    body += data;
  });
  req.on('end', () => {
    // let { msg } = JSON.parse(body);
    // res.end(JSON.stringify({ req: 'ok', msg: msg }));
    try {
      const { palabra } = JSON.parse(body);
      if (typeof palabra == 'string') {
        let reverse = palabra
          .split('')
          .reverse()
          .join('');
        let palindromo = palabra == reverse ? true : false;
        res.end(
          JSON.stringify({
            palabra: palabra,
            palindromo: palindromo
          })
        );
      } else {
        res.statusCode = 503;
        res.end(
          JSON.stringify({
            error:
              'Se esperaba un string y se recibio un tipo ' + typeof palabra
          })
        );
      }
    } catch (err) {
      console.log(err);
      res.end(JSON.stringify({ err: err }));
    }
  });
});

module.exports = serverPalindrome;
