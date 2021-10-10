//  

const locations = [ ];
const makePoint = function makePoint(x,y) {
  let p = {x:x, y:y};
  return p;
}

function factory (n) {
  for (let i=0; i<n; i++){  
    let p = makePoint(i,i);
    locations.push(p);
  }
}

factory(3);

//let p = makePoint(3,4);
//locations.push (p);
console.log("locations: " + JSON.stringify(locations));


/*
const locations = [ ];
const makePoint = function makePoint(x,y) {
  let p = {x:x, y:y};
  return p;
}
let p = makePoint(3,4);
locations.push (p);
console.log("locations: " + JSON.stringify(locations));


*/