const repl = require('repl')
var i = 0;
setInterval(() => {
    i++;
}, 1000);

function a() {
    console.log(i);

}
const replServer = repl.start({
    prompt: ":)"
})
replServer.context.a = a;
exports.a = a;