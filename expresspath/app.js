const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const requests= require("requests");
const fs=require("fs");
const templatepath = path.join(__dirname, "./template/views");
//console.log(templatepath);
// to set view engine
const homefile=fs.readFileSync("home.html",'utf8');
const partialpath = path.join(__dirname, "./template/partials")
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);
// template engine
const replace1=(tempdata,val)=>{
    let temperature=tempdata.replace("{%name%}",val.name);
    return temperature;
}

app.get("", (req, res) => {
    res.render('index');
})

app.get('/', (req, res) => {
    res.send("home");
});
app.get('/about', (req, res) => {
    console.log(req.query.name);
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=7eef9ff479be2b4760bebd6dfe95c0ce`).on("data",(chunk)=>{
        const obj=JSON.parse(chunk);
        const objdata=[obj];
        const realtimedata=objdata.map((val)=>replace1(homefile,val)).join("");
        res.write(realtimedata);
    })
    .on("end",(err)=>{
        if(err)
        res.write("page not found");
        res.end();
    })
});
app.get('/contact', (req, res) => {
    res.send("contact");
});
app.listen(8080);