//get gcf

function lcm(a,b){
    let arrayA=[];
    for(i=1; i<a;i++){    
        let resulta = a%i;
        if (resulta == 0){
            factor1 = a/i;
            arrayA.unshift(factor1)        
        }  
    }

    let arrayB=[];
    for(j=1; j<b;j++){
        let resultb = b%j;
        if (resultb == 0){
            factor2 = b/j;
            arrayB.unshift(factor2)        
        }  
    }

    const lengthA = arrayA.length;
    const lengthB = arrayB.length;
    let commonFactors = []; 
    for(m=0;m<lengthA;m++){  
        for(k=0;k<lengthB;k++){      
         if(arrayB[k]==arrayA[m]){
            commonFactors.unshift(arrayB[k]);
         }
        } 
    }
    let greatestCommonFactor = commonFactors[0]
  //  console.log(greatestCommonFactor)
    document.querySelector('#gcf').innerHTML = 'GCF: ' +greatestCommonFactor;

    let quotient1 = a/greatestCommonFactor;
    console.log(quotient1)

    // let quotient2 = b/greatestCommonFactor;
    // console.log(quotient2)

    let lcm = quotient1*b;
    document.querySelector('#lcm').innerHTML = 'LCM: '+lcm;
    

    // let LCM2 = quotient2*a
    // console.log(LCM2)
}



const compTrigger = document.querySelector('#compute');
compTrigger.addEventListener('click', execute);

function execute(){
    const values = pullValues();
    
    if(values.valid){

    lcm(values.container1,values.container2)
    
    
    }
    
}

function pullValues(){
    const firstInput = document.querySelector('#firstInput').value;
    const secondInput =document.querySelector('#secondInput').value;

    return{

        container1: Number(firstInput),
        container2: Number(secondInput),
        valid: firstInput !=='' && secondInput !=='',
    }
}