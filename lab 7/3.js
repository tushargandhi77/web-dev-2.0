
async function operate(){
    let a = await add1(10)
    let b = await add2(a)
    let c = await add3(b)
    console.log(c);
}


operate()