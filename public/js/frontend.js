const btnCompare = document.getElementById('compare');
const btnSend = document.getElementById('send');

let MD5 = document.getElementById('MD5');
const SHA1 = document.getElementById('SHA1');
const SHA256 = document.getElementById('SHA256');
const SHA512 = document.getElementById('SHA512');
const input = document.getElementById('hash');
const compareResult = document.getElementById('compareResult');

btnSend.addEventListener('click', async()=>{
    let hashes = await window.api.sendFile();
    console.log(hashes);
    
    MD5.innerText = hashes.MD5;
    SHA1.innerText = hashes.SHA1;
    SHA256.innerText = hashes.SHA256;
    SHA512.innerText = hashes.SHA512;

    });

    
btnCompare.addEventListener('click', ()=>{
    const toCompare = input.value;
    
    if(toCompare=== ''|| toCompare === null){
        return compareResult.innerText = `EMPTY`;
    }

    let itMatch = (toCompare) => {
        if(toCompare.length === MD5.innerText.length){
            if(toCompare === MD5.innerText){
                return 'MD5';
            }
        }
        if(toCompare.length === SHA1.innerText.length){
            if(toCompare === SHA1.innerText){
                return 'SHA1';
            }
        }
        if(toCompare.length === SHA256.innerText.length){
            if(toCompare === SHA256.innerText){
                return 'SHA256';
            }
        }
        if(toCompare.length === SHA512.innerText.length){
            if(toCompare === SHA512.innerText){
                return 'SHA512';
            }
        }
        return false;
    }
    let result = itMatch(toCompare);
    
    if(result){
        compareResult.innerText = `${result} MATCH!!`;
    }
    else{
        compareResult.innerText = `DIDNT MATCH`
    }
    

})

