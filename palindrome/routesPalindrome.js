const serverPalindrome = require('./serverPalindrome');
const Palabra = require('../models/Palabra.model');

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
        let isPalindromo = palabra == reverse ? true : false;
        let palabraDb = new Palabra({
          palabra,
          isPalindromo
        });

        palabraDb.save(err => {
          return res.end(
            JSON.stringify({
              data: [],
              error: err
            })
          );
        });

        res.end(
          JSON.stringify({
            data: palabra,
            isPalindromo
          })
        );
      } else {
        res.statusCode = 503;
        res.end(
          JSON.stringify({
            data: [],
            error:
              'Se esperaba un string y se recibio un tipo ' + typeof palabra
          })
        );
      }
    } catch (err) {
      console.log(err);
      res.end(JSON.stringify({ data: [], err: err }));
    }
  });
});

module.exports = serverPalindrome;
