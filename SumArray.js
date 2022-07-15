// Fonction qui :
//1) Calcule la valeur mximale d'un tableau 
//2) Calcul la somme du tableau sans la valeur max
//3) Compare les 2 et si la somme est >= alors on renvoie true

function SumNumber(arr) {
  let max = 0, sum = 0;


//1) Calcule la valeur mximale d'un tableau 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
//2) Calcul la somme du tableau sans la valeur max
    sum = sum + arr[i];
  }

  sum = sum - max;
  console.log("sum:", sum);
  console.log("max:", max);

  //3) Compare les 2 et si la somme est >= alors on renvoie true
  if (sum >= max) {
    console.log("true");
  } else {
    console.log("false");
  }
}

let arr = [1, -11, 6, 4];

SumNumber(arr);
