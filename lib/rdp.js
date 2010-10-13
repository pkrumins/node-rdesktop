var net = require('net');
var sys = require('sys');
var EventEmitter = require('events').EventEmitter;
var BufferList = require('bufferlist');

var Parser = require('./parser');

module.exports = RDP;
RDP.prototype = new EventEmitter;
function RDP (opts) {
    if (!(this instanceof RDP)) return new RDP(opts);
    var self = this;
    
    if (!opts) opts = {};
    var port = opts.port || 3389;
    var host = opts.host || 'localhost';
    self.stream = net.createConnection(port, host);
    self.write = self.stream.write.bind(stream);
    
    var bufferList = new BufferList;
    sys.pump(self.stream, bufferList);
    
    self.stream.on('connect', function () {
        self.emit('connect');
        Parser(self, bufferList);
    });
}
