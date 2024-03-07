
const division = (a,b) => new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(b==0){
            reject(new Error("Cannot divide by zero"))
        }
        else{
            resolve(a/b)
        }
    },3000)
});

const performDivision = async (x,y)=>{
    try{
        const result = await division(x,y)
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}

performDivision(5,2)