var Put = require('rfb/put');

module.exports = function (stream) {
    return {
        send : function (buf) {
            Put()
            .word8(3)
            .word8(0)
            .word16le(4 + buf.length)
            .send(stream);
            stream.write(buf);
        }
    };
};
