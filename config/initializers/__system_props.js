var mongoProps=require('./_mongo_props');
var redisProps=require('./_redis_props');

var systemProps={
	mongoPropVar:mongoProps,
	redisPropVar:redisProps
};


module.exports=systemProps;