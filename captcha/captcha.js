'use strict';

const Captcha = (function() {
  return {
    generate() {
      let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
      'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
      'a','b','c','d','e','f','g','h','i','j','k','l','m',
      'n','o','p','q','r','s','t','u','v','w','x','y','z'];

      let code = null;
      for(let i = 0; i < 4; i++) {
        let l1 = alpha[Math.floor(Math.random() * alpha.length)];
        let l2 = alpha[Math.floor(Math.random() * alpha.length)];
        let l3 = alpha[Math.floor(Math.random() * alpha.length)];
        let l4 = alpha[Math.floor(Math.random() * alpha.length)];
        code = l1 + '' + l2 + '' + l3 + '' + l4;
      } 
      document.getElementById('main-captcha').value = code;  
    }
  }
})();

