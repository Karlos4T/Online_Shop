
const fs = require('fs');

const uploadProduct = () => {
    
}

export const createImgDir = () => {
    const dir = '../../Images';


    fs.mkdir(dir, (err) => {
        if(err) {
            throw err;
        }
        console.log(dir);
    })
}
