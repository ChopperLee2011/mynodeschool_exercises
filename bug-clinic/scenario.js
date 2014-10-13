var fs = require('fs');

var peach = function(obj){
    console.trace("traced");
    console.log(obj);
}

var bowser= function(callback){
    fs.readFile(process.argv[2],{encoding:"utf-8"},callback);
}

var koopa = function(err,file){
    if (err) return console.err("errors occured");
    peach(JSON.parse(file));
}

bowser(koopa);
