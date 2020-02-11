/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (let i = 0; i < preferences.length; i ++ ) {
      let el1 = preferences[i] - 1;
      if (el1 == i) continue;
      let el2 = preferences[el1] - 1;
      if (el2 == el1) continue;
      let el3 = preferences[el2] - 1;
      if (el3 == el2) continue;
      if (el3 == i) {
        count++;
      }
  }
  return count/3;
};
