// const fs = require('fs');

// fs.mkdir('path',(err)=>{
//     console.log('directory made');
// });
const imp=require('./path/imort');
imp.add(2,3);
// fs.writeFileSync('bio.txt','hello there');
// fs.appendFileSync('bio.txt','more data');
// fs.appendFileSync('bio.txt',' more than previous');

// console.log(fs.readFileSync('bio.txt').toString());
// fs.renameSync('bio.txt','mybio.txt');
//fs.mkdirSync('bio');
//fs.writeFileSync('bio/bios.txt',"how are you? ");

//fs.appendFileSync('bio/bios.txt',' adding more data');
//console.log(fs.readFileSync('bio/bios.txt','utf8'));
//fs.renameSync('bio/bios.txt','bio/bio.txt');
//fs.unlinkSync('bio/bio.txt');
//fs.rmdirSync('bio');
// fs.mkdir('Async',(err)=>{
//     console.log('directory created');
// });

// fs.writeFile('Async/bio.txt','How you doin?? ',(err)=>{
//     console.log('data writtern' );
// });

// fs.appendFile('Async/bio.txt',' i am good thank you!!',(err)=>{
//     console.log('Data Added');
// });

// fs.readFile('Async/bio.txt','utf8',(err,data)=>{
//     console.log(data);
// });

// fs.readFile('Async/bios.txt','utf8',(err,data)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })

// fs.rename('Async/bio.txt','Async/my-bio.txt',(err)=>{
//     console.log('name changed');
// })

// fs.unlink('Async/my-bio.txt',(err)=>{
//     console.log('deleted file');
// });

// fs.rmdir('Async',(err)=>{
//     if(err)
//     console.log(err);
//     else
// console.log('folder deleted');
// });

// const validator=require('validator');
// const chalk=require('chalk');
// const res=validator.isEmail('a@mail.com');
// console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));


const fs=require("fs");
const http=require("http");
const server=http.createServer();
const data=imp.name;


server.on('request',(req,res)=>{
    const rstream=fs.createReadStream('./path/val.txt');
    rstream.on("data",(data)=>{
        res.write(data);
    })
    rstream.on("end",()=>{
        res.end();  
    })
    rstream.on("error",(err)=>{
        console.log(err);
        res.end("file not found");
    })

});

server.listen(8080);