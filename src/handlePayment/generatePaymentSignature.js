const crypto = require("crypto-js");


export function generatePreHash(process) {
  let preHash = '';
  let count = 0;
  for (let [key, value] of Object.entries(process)) {
  if (key !== 'signature') {
  preHash += key + '=' + encodeURIComponent(value);
  preHash += '&'
  }
  count++
  }
  preHash = preHash.slice(0, -1);
  return preHash ;
}

export function generateSignature(process, passphrase) {
  const signature = crypto.MD5(generatePreHash(process) + '&passphrase=' +
  encodeURIComponent(passphrase))
  return signature;
}
  export function generateApiSignature(process) {
    const signature = crypto.MD5(generatePreHash(process))
    return signature;
  }
