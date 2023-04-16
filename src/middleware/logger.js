'use strict';

function logger(request, response, next) {
  console.log('logger works');
  next();
}

module.exports = logger;