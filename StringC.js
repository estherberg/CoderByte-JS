// 1) Remplacez chaque lettre de la chaîne par la lettre qui la suit dans l'alphabet) 
// (c'est-à-dire que c devient d, z devient a).
// 2) Afficher les voyelles en majuscule



function StringChallenge(str) {
    let array = str.toString().split();
    let str2;
    for (let i = 0; i < array.length; i++) {

     

        let letter = String.fromCharCode(array[i].charCodeAt(array.length - 1) + 1);
        str2 += letter;

         // console.log("array[i]:",array[i]);
        console.log("letter[i]:",letter[i]);
        // console.log("str2[i]:",str2[i]);

        if (array[i] == "a" && array[i] == "e" && array[i] == "i" && array[i] == "o" && array[i] == "u") {
            let letter = String.fromCharCode(array[i].charCodeAt(str.length - 1) + 1).toUpperCase();
            str2 += letter;
        }
    }


    console.log("str2 :",str2);
}


let str = ['fun times!'];

console.log("StringChallenge(str):",StringChallenge(str));
// console.log(str);
