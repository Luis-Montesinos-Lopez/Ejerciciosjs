// function generateRandomNumber() {
//   let numeroAleatorio=Math.floor(Math.random() * 10) + 1;
//     return numeroAleatorio;
// }
// function playGame(randomNumber, arrayNum) {
//   let contador=1;
//   let i=0;
//   do{
//     if(arrayNum[i]==randomNumber){
//       return `Exacto, has acertado en el ${contador} intento! el numero era el ${randomNumber}`;
//     }else{
//       contador++
//     }
//     if(i==arrayNum.length-1){
//       return`Ninguno de los numeros introducido coincide con el creado aleatoriamente`;
//     }
//     i++
//   }while(arrayNum[i]!=randomNumber)
//   }
function generateRandomNumber() {
    let numeroAleatorio=Math.floor(Math.random() * 10) + 1;
      return numeroAleatorio;
  }
    function playGame(randomNumber, arrayNum) {
      let contador = 1;
      for(let i = 0; i < arrayNum.length; i++){
        if(arrayNum[i] == randomNumber){
          return `Exacto, has acertado en el ${contador} intento! el numero era el ${randomNumber}`;
        } else {
          contador++;
        }
      }
      return `Ninguno de los numeros introducido coincide con el creado aleatoriamente`;
    }
  console.log(playGame(generateRandomNumber(),[1, 3, 5, 3, 7, 9, 5, 3, 8, 9]));