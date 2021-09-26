const obj = {
  laptop: [{
     "productId": "123"
  }],
  "DESKTOP": [{
     "productId": "456"
  }],
  "MOUSE": [{
     "productId": "789"
  }, {
     "productId": "012"
  }],
  "KEY-BOARD": [{
     "productId": "345"
  }]
};
const searchByPair = (obj = {}, pair = {}) => {
  const toSearch = Object.values(pair)[0];
  let required = undefined;
  Object.keys(obj).forEach((key) => {
     if(obj[key].find((pid) => pid.productId === toSearch)){
        required = key;
     }
  });
  return required;
};
console.log(searchByPair(obj, {
  'productId': '123'
}));
