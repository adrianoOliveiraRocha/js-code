/*
flatten dictionary => {'Key1': '1', 'Key2.a': '2','Key2.b' : '3', 'Key2.c.d' : '3', 'Key2.c.e' : '1'}
*/

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

let flattenedDictionary = {}
function flattenDictionary(dictionary, keyPlus=null) {
  for (var key in dictionary) {
    let newKey = (keyPlus ? keyPlus + '.' : '') + key
    if(typeof dictionary[key] != 'object') {
      flattenedDictionary[newKey] = dictionary[key]
    } else {
      flattenDictionary(dictionary[key], newKey)
    }
  }
  return flattenedDictionary;
}

console.log(flattenDictionary(dictionary))
