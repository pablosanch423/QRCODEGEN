const qr = require('qrcode');
const fs = require('fs');

const dataToEncode = 'example.com'; // website

qr.toFile('./qr-code.png', dataToEncode, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('QR code generated and saved as qr-code.png');
  }
});
