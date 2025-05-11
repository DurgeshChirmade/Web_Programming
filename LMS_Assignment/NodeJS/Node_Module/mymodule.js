function isPrime(num){
    if(num==0 || num==1){
        return false;
    }
    for(i=2;i<num/2;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}

function calFact(num){
    fact=1;
    if(num==0 || num==1){
        return fact;
    }
    for(i=1;i<=num;i++){
        fact *=i;
    }
    return fact;
}

exports.myModule ={isPrime,calFact};