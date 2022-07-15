// 1) Remplacez chaque lettre de la chaîne par la lettre qui la suit dans l'alphabet) 
// (c'est-à-dire que c devient d, z devient a).
// 2) Afficher les voyelles en majuscule



function StringChallenge(str)
{

    for (let i = 0; i < str.length; i++)
    {

        // Remplacez chaque lettre de la chaîne par la lettre qui la suit dans l'alphabet
        // (c'est-à-dire que c devient d, z devient a).
        if ((str[i] > 'a') && (str[i] < 'z'))
        {
            str[i]++;
          

          //  2) Afficher les voyelles en majuscule

            if ((str[i] == 'a') || (str[i] == 'e') || (str[i] == 'i') || (str[i] == 'o') || (str[i] == 'u'))
            {
                str[i] = str[i] - 'a' + 'A';
                // cout << putchar(toupper(str[i]))<<endl;
            }
        }
     }

    return str;
    }



    let str = ["fun times!"];

    console.log(StringChallenge);
