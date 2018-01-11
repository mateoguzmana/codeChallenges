const gardens = {
  'My Garden': {
    apples: [
      { size: 'large', color: 'red' }, { size: 'small', color: 'yellow' }
    ]
  }
};

fromGarden = (object, key) => {
    return (subKey) => { 
        if(subKey) {
             return (quantity) => { 
                 if(quantity){
                     let objects = [];
                     for(let i = 0; i < quantity; i++) {
                         objects.push(object[key][subKey][i])
                     }
                     return objects;
                 }
                 return object[key][subKey];
             }; 
        } else {
             return object[key];   
        }
    };
}

const fromMyGarden = fromGarden(gardens, 'My Garden');
const getApples = fromMyGarden('apples');
const myApples = getApples(2);