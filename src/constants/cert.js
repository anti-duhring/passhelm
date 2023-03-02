// ./cert.js

const fs = require('fs');

const caFileContents = fs.readFileSync('../../assets/cert/ca-cert.pem', 'utf8');
const keyFileContents = fs.readFileSync('../../assets/cert/ca-key.pem', 'utf8');

module.exports = {
  ca: caFileContents,
  key: keyFileContents
};
