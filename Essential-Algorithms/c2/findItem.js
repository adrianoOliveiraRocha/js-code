const tree = [  
  7, [
    [4, [[2, [1, 3]], [6, [5]]]], [9, [8, 10]]
  ]  
];

function findItem(targetValue, tree) {
  let res = false;
  const testNode = tree[0];
  
  tree.forEach(element => {
    if(typeof element === 'number') {
      if(targetValue == element) {
        console.log(`element: ${element}; targetValue: ${targetValue}`);
        console.log('testNode: ', testNode)
        res = true;
        console.log(res);
      }
    } else {
      findItem(targetValue, element);
    }
  });
  return res;
}

console.log(findItem(1, tree))
