const crypto = require('crypto-js')



const fs = require('fs');




const generateMD5= (filePath)=> {

    file = fs.readFileSync(filePath, 'binary');

    const md5 = crypto.MD5(file).toString(crypto.enc.Hex);
    const SHA1 = crypto.SHA1(file).toString(crypto.enc.Hex);
    const SHA256 = crypto.SHA256(file).toString(crypto.enc.Hex);
    const SHA512 = crypto.SHA512(file).toString(crypto.enc.Hex);

    return {
        MD5: md5,
        SHA1,
        SHA256,
        SHA512
    }


}



module.exports = {
    generateMD5
}