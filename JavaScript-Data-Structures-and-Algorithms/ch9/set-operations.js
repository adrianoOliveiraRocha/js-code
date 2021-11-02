
module.exports.intersection = (setA, setB) => {
  let intersection = new Set()
  if(setA.size <= setB.size) {
    for (let el of setA) {
      if(setB.has(el)) intersection.add(el);
    }
  } else {
    for (let el of setB) {
      if(setA.has(el)) intersection.add(el);
    }
  }
  return intersection;
}

module.exports.union = (setA, setB) => {
  if(setA.size <= setB.size) {
    let union = new Set(setB)
    for(let el of setA) {
      if(!union.has(el)) union.add(el)
    }
    return union;
  } else {
    let union = new Set(setA)
    for(let el of setB) {
      if(!union.has(el)) union.add(el)
    }
    return union;
  }
}

module.exports.diferrence = (setA, setB) => {
  let difference = new Set();
  for(let el of setA) {
    if(!setB.has(el)) difference.add(el)
  }
  return difference;
}