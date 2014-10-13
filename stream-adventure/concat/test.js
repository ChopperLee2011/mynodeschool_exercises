var concat = require('concat-stream');
var write = concat(function(data) {
console.log(data);
})
    write.write([1,2,3])
    write.write([4,5,6])
    write.end();
