function division(a,b){
    return new Promise(((resolve,reject)=>{
        setTimeout(()=>{
            if(b==0){
                reject("Divisor cannot be zero")
            }
            else{
                resolve(a/b)
            }
        },1000)
    }))
}

division(3,0)
.then(data=>console.log("Result:"+data))
.catch(err=>console.log(err))