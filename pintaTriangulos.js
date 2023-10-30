function trianguloConsola(num) {
    let triangulo="";
    for(let i=1;i<=num;i++){
      for(let j=1;j<i;j++){
        triangulo+=j;
      }
      triangulo+=i+`\n`;
    }
    return triangulo;
  }
  
  // Apartado B --------------------------------------------------------------------------
  function trianguloConsolaB(num) {
    let triangulo="";
    for(let i=0;i<num;i++){
      for(let j=0;j<i;j++){
        triangulo+=i+1;
      }
      triangulo+=i+1+`\n`;
    }
    return triangulo;
  }
  
  // Apartado C --------------------------------------------------------------------------
  function trianguloConsolaC(num) {
    let triangulo="";
    let contador =1;
    for(let i=0;i<=num;i++){
      for(let j=0;j<i;j++){
        triangulo+=contador;
        contador++
      }
      triangulo+=`\n`;
    }
    return triangulo;
  }


  console.log(trianguloConsola(4));
  console.log(trianguloConsolaB(4));
  console.log(trianguloConsolaC(4));