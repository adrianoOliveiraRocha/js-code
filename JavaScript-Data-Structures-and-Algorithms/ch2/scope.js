'use strict'

{
  var noRestrict = 'no restrict scope'; 
}

console.log(noRestrict); // no restrict scope

{
  let restrict = 'restrict scope';
}

console.log(restrict); // ReferenceError: restrict is not defined
