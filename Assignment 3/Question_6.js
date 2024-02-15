arr = [4,3,21,6,3,7,4,62,2,8]

const display = (a)=>{
    a.forEach((number,index)=>console.log(`${index} at ${number}`))
}

const display2 = (aa)=>{
    aa.forEach(element=>console.log(element))
}

// display2(arr)
//b
const squred = (a)=>(
    a.map(number =>  number**2)
)
const sq = squred(arr)
console.log(sq);

// c
const evenNo = (a)=>(
    a.filter(number=>number%2===0)
)

const ev = evenNo(arr)
console.log(ev);

// d
const numberToremove = 8
const rem = (a)=>(
    a.filter(number=>number !== numberToremove)
)

const r = rem(arr)
console.log(r);

//e
const sortDesc = ()=>{
    arr.sort((a,b)=>b-a)
}
const sortAssc = ()=>{
    arr.sort((a,b)=>a-b)
}

sortAssc()
console.log(arr);