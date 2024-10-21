// const CryptoJS = require('crypto-js');
import CryptoJS from 'crypto-js';

const password = 'faizanadmin$265'; // Replace with your actual password
const hashedPassword = CryptoJS.SHA256(password).toString();

console.log('Hashed Password:', hashedPassword);

"sdsdds"