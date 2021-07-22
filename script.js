


/* let arr=[1,4,[5,7,[8,15,[12,14],55,],81,71],0]
for(let i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
        console.log(arr[i])
    }
}  */







let arr=[1,4,[5,7,[8,15,[12,14],55,],81,71],0]

function multiply(){
    var p=1;
    for( var i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){

            p*=arr[i]
            return p
        }
    }
}

    console.log(arr[i]) 




     
