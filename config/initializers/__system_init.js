var mongoInit=require('./_mongo_init');
var redisInit=require('./_redis_init');


var systemVariables={
	mongoInst:mongoInit,
	redisInst:redisInit
};

module.exports=systemVariables;