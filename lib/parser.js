var Binary = require('bufferlist/binary');
var Put = require('rfb/put');
var TPKT = require('./tpkt');

module.exports = function (rdp, bufferList) {
    var tpkt = TPKT(rdp.stream);
    
    Binary(bufferList)
    .tap(function () {
        
    })
};
