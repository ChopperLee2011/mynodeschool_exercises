var cp = require('child_process')
  , duplex = require('duplexer')
    , grep = cp.exec('grep Stream');

    duplex(grep.stdin, grep.stdout);
