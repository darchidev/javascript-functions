import array0 from './functions/NewArrayOfObjectsWithOnlyAttributes.js';
import array1 from './functions/NewArrayOfObjectsWithNewValuesOnAttributes.js';

const obj = {
  NewArrayOfObjectsWithOnlyAttributes(a, b) {
    return array0(a, b);
  },
  NewArrayOfObjectsWithNewValuesOnAttributes(a, b){
    return array1(a, b);
  }
};

export default obj;
