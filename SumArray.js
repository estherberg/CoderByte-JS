function SumNumber(arr) {
  let max = 0, sum = 0;


  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    sum = sum + arr[i];
  }

  sum = sum - max;
  console.log("sum:", sum);
  console.log("max:", max);

  
  if (sum >= max) {
    console.log("true");
  } else {
    console.log("false");
  }
}

let arr = [1, -11, 6, 4];

SumNumber(arr);
