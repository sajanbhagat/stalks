var systemProps=require('./__system_props');
var redis = require("redis"),
       client = redis.createClient(systemProps.redisPropVar.port, systemProps.redisPropVar.host);

 client.on('connect', function() {
 	console.log("\n\n\n##############################################################################################################\n\n\n");
    console.log('connected to HereIam Redis Server');
 });

 client.on("error", function (err) {
        console.log("Error " + err);
 });

client.on("end", function (err) {
        console.log("Error " + err);
 });

module.exports=client;