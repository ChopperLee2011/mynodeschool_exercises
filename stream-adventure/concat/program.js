var concat = require('concat-stream');
//var http = require('http');

//var server = http.createServer(function(req,res){
//    if(req.method === 'POST'){
//        req.pipe(concat(function(body){
//            var obj = JSON.parse(body);
//            res.end(Object.keys(obj).join('\n'));
//        }));
//    }
//    else res.end();
//});
process.stdin.pipe(concat(function(buf){
    var s = buf.toString().split('').reverse().join('');
    console.log(s);
}));
