const serveStatic = require('serve-static');
const express = require('express');
const kue = require('kue');

const vueKueApp = express();
const redisHost = process.env.REDIS_HOST;
const redisPort = process.env.REDIS_PORT || 6379;
const redisPrefix = process.env.REDIS_PREFIX || 'q';

kue.createQueue({
  redis: `redis://${redisHost}:${redisPort}`,
  prefix: redisPrefix
});

vueKueApp.use(serveStatic(__dirname + '/dist'));

vueKueApp.use('/kue-api/', kue.app);
vueKueApp.listen(3050)
console.log("Running:" + 3050);