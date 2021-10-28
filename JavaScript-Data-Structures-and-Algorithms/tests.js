
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

function flattenDictionary(dictionary, value=null) {
  let flattenedDictionary = {}
  for (var key in dictionary) {
    if(typeof dictionary[key] != 'object') {
      flattenedDictionary[key] = dictionary[key]
    } else {
      console.log(dictionary[key])
    }
  }
  return flattenedDictionary;
}

console.log(flattenDictionary(dictionary))
