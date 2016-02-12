var mongoose = require('mongoose');
var systemProps=require('./__system_props');

var url = 'mongodb://'+systemProps.mongoPropVar.host+':'+systemProps.mongoPropVar.port+'/'+systemProps.mongoPropVar.dbname;

mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	
	console.log("\n\n\n##############################################################################################################\n\n\n")
	console.log("Connected correctly to Monogo Server by mongoose connection");

  	var obj={
		  	'db':db,
		  	'mongoose':mongoose
	};	

  	//console.log(obj)
  	module.exports=obj;
  	
});