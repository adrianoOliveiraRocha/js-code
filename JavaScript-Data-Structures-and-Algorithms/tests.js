let dictionary = {
  'Key1': '1',
  'Key2': {
     'a' : '2',
     'b' : '3',
     'c' : {
         'd' : '3',
         'e' : '1'
     }
   }
}
// my solution
function flattenDictionary(dictionary) {
  let flattenedDictionary = {}
  function main(dictionary, prefix=null) {
    for (var key in dictionary) {
      let newKey = (prefix ? prefix + '.' : '') + key
      if(typeof dictionary[key] != 'object') {
        flattenedDictionary[newKey] = dictionary[key]
      } else {
        main(dictionary[key], newKey)
      }
    }
  }
  main(dictionary)
  return flattenedDictionary;
}


console.log(flattenDictionary(dictionary))
