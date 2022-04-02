var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listele',function(req,res){
    //res.send('kullanıcı listeleme');
    fs.readFile('users.json','utf8',function(err,data){
        console.log(data);
        res.end(data);
    });
});


app.get('/sil',function(req,res){
    //res.end('kullanıcı silme');
    fs.readFile('users.json','utf8',function(err,data){
    data = JSON.parse(data);
    var id = "user" + req.query.id;
    delete data[id]; 
    console.log(data);
    res.end(JSON.stringify(data));
    fs.writeFile('users.json',JSON.stringify(data),function(err){
        console.log('HATALI');
    });
});
});


app.get('/ekle',function(req,res){
    //res.end('kullanıcı ekleme');
    var newUser = {
        "user3" :{
            "adi" : req.query.adi,
            "sifre": req.query.sifre
        }
    };
    fs.readFile('users.json','utf8',function(err,data){
        data = JSON.parse(data);
        data["user3"] = newUser["user3"]; 
        console.log(data);
        res.end(JSON.stringify(data));
        fs.writeFile('users.json',JSON.stringify(data),function(err){
            console.log('HATALI');
        });
    });
});


app.get('/sorgula',function(req,res){
   // res.end('kullanıcı sorgulama');
   fs.readFile('users.json','utf8',function(err,data){
    data = JSON.parse(data);
    var id = "user" + req.query.id;
    console.log(data[id]);
    res.end(JSON.stringify(data[id]));
    
});
});


var server = app.listen(3030, function(){
    console.log('sunucu çalışıyor');
});