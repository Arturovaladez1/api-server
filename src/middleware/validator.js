'use strict';

function validaor(request, response, next){
  console.log(request);
  if(request.query.name){
    next();
  } else {
    next('Error at validator!');
  }
  
}

module.exports = validaor;