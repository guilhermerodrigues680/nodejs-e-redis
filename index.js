const redis = require('redis');
const client = redis.createClient();

client.on('connect', function () {
    console.log('connected');
    // Chave-valor
    client.set('total', '1800');
    client.get('total', function (err, object) {
        console.log(object);
    })
    
    // HASH
    client.hmset('languages', 'portugues', 'ingles', 'espanhol', 'alemao');
    client.hgetall('languages', function (err, object) {
        console.log(object);
    });

    // Lists
    client.rpush(['frameworks', 'angular', 'react', 'vue'], function (err, reply) {
        console.log(reply); 
    });
    client.lrange('frameworks', 0, -1, function (err, reply) {
        console.log(reply); 
    });

    // Sets
    client.sadd(['tags', 'angularjs', 'angularjs', 'backbonejs', 'emberjs'], function (err, reply) {
        console.log(reply);
    });
    client.smembers('tags', function (err, reply) {
        console.log(reply);
    });

    //  Del e expire
    client.expire('total', 10);
    client.del('frameworks', function(err, reply) {
        console.log(reply);
    });

});