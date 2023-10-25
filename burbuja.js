let lista=[7,1,3,2,34,3,8,11,6,9];

for(i=0; i<lista.length;i++){
    for(j=0; j<lista.length-1;j++){
    if(lista[j]>lista[j+1]){
        let listaDos=lista[j+1];//listaDos[0]=lista[1]
        lista[j+1]=lista[j];//lista[1]=lista[0];
        lista[j]=listaDos;//lista[0]=listaDos=0(lista=1)
    }
}}
console.log(lista);

