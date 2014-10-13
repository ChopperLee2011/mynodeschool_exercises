var http = require('http');
var through = require('through');


http.createServer(
        function(req,res){
            if(req.method ==='POST'){
                req.pipe(through(function(buf){
                    this.queue(buf.toString().toUpperCase());})).pipe(
                res);
            }
            res.end('\n');
        }).listen(process.argv[2]);

