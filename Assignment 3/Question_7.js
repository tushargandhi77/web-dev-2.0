const students = [ 
    { name: "Amit", age: 23 },  
    { name: "Sima", age: 21 }, 
    { name: "Bimal", age: 19 }, 
] 

// a
const display = (a)=>{
    a.forEach(({name,age})=>console.log(`${name} is ${age} years old`))
}

display(students)


//b

const maxAge = (a) =>{
    const maxage = a.reduce((prev,current)=>(prev.age>current.age)?prev:current)
    console.log(maxage);
}

maxAge(students)

//c 

const totalAge = (a)=>{
    const total = a.reduce((sum,student)=>sum+student.age,0)
    const avgage = total/students.length;
    console.log(total);
    console.log(avgage);
}

totalAge(students)