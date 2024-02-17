// 21bcsb98

let primeornot = (number) => {
    let count = 0;
    for(let i = 2;i<number;i++){
        if(number%i==0){
            count++;
        }
    }
    if(count==0){
        return "Number is prime"
    }
    else{
        return "Number is not prime"
    }
}


console.log(primeornot(16));
