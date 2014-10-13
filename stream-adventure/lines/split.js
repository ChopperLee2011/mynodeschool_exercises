var split = require('split');
var through = require('through');
var upFlg = false;
var tr = through(function(buf){
    this.queue(upFlg === true ? buf.toString().toUpperCase()+'\n':buf.toString().toLowerCase()+'\n');
    upFlg = !upFlg;
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
