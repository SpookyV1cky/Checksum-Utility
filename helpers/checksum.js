const crypto = require('crypto-js');



const fs = require('fs');




const generateMD5= (filePath)=> {

    hashes = [];

    file = fs.readFileSync(filePath, 'binary');

    hashes.push(crypto.MD5(file).toString(crypto.enc.Hex));
    hashes.push(crypto.SHA1(file).toString(crypto.enc.Hex));
    hashes.push(crypto.SHA256(file).toString(crypto.enc.Hex));
    hashes.push(crypto.SHA512(file).toString(crypto.enc.Hex));


    console.log(hashes);
    return hashes;


}



module.exports = {
    generateMD5
}