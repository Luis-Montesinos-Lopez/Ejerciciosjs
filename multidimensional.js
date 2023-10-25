let multi=[[1,2,3,4],[5,6,7,8]];
let resultado=0;

for(i=0;i<multi.length;i++){
    for(j=0;j<multi[i].length;j++){
        resultado+=multi[i][j];
    }
}
console.log(resultado);