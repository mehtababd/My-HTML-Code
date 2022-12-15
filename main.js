// var myArray = [2, 7, 9];
// let l = myArray.length;

// myArray.push([4, 90], "horse");
//   /*[4, 90] is a nested array to print 4: myArray[4][0] to print 90: myArray[4][1] */
// myArray.unshift(3, 9); // adds the first element

// myArray.pop(); //removes the last element in the myArray
// myArray.shift(); // removes the 1st element in the myArray
// console.log(myArray);

function init(a, b) {
  sum = a + b;
  function showName() {
    document.write(sum);
  }
  showName();
}
init(6, 7);