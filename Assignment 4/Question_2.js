const randomnuber = ()=>{
    return new Promise(resolve => {
        setTimeout(()=>{
            const ran = Math.floor(Math.random()*100)+1
            resolve(ran)
        },3000)
    })
}

const checkoddeven = async ()=>{
    try{
        const number = await randomnuber()
        console.log("Generated number: ",number);

        if(number%2===0){
            console.log("number is even");
        }
        else{
            throw new Error("number if odd")
        }
    }
    catch(error){
        console.log("error: ",error.message);
    }
}

checkoddeven()