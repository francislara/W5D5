const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`Is ${el1} > ${el2}? `, function(answer){
    if (answer==="yes"){
      callback(true);
    }else{
      callback(false);
    }
  });
}
// askIfGreaterThan("1","2", dummyCallback);

function dummyCallback(arg){
  console.log(arg);
  reader.close();
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if(i===arr.length-1){
    outerBubbleSortLoop(madeAnySwaps);
  }else{
    const swaps = function(swapped){
      if (swapped){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        madeAnySwaps = true;
      }
      i += 1;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    };
    askIfGreaterThan(arr[i], arr[i+1], swaps);
  }
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}
//
// innerBubbleSortLoop([2,1,3], 0, false, dummyCallback );

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps){
      madeAnySwaps = false;
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
    }else{
      sortCompletionCallback(arr);
    }
  }
  let madeAnySwaps = true;
  outerBubbleSortLoop(madeAnySwaps);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}


function dummyComplete(arg){
  console.log(arg);
  reader.close();
}

absurdBubbleSort([2,1,3,8,9,2,25,10], dummyComplete);

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
