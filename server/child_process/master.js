var fork = require('child_process').fork;
var cpus = require('os').cpus();
for (var i=0;i<cpus.length;i++){
    console.log(cpus[i]);
    fork('./worker.js');
}
// console.log(cpus);