// Features of ES6
// 1. let and const
// 

// let a =1;
// const a = 10;
// a =2

// console.log(a)

let arr = [1,2,3,4]
// let a = arr
// console.log(a)

// a[2] = 200

// console.log(arr)

//Spread operator

// let a = [...arr]

// console.log(a)
// a[2] = 200
// console.log(a)
// console.log(arr)


// 4. Destructuring

// std = {
//     "roll":1,
//     "name":"tushra"
// }


// let {roll,name} = std
// console.log(roll)
// console.log(name)


// let a = ["arr1","arr2","arr3"]

// let [x,...y]  = arr
// console.log(x)
// console.log(y)


// 5.class

// class Employee{
//     Employee(){
//         console.log("Obj Created")
//     }
// }

// let emp = new Employee()


// 6  Arrow  function

let test = ()=>{
    console.log("Function is arrow fucntion")
}
test()

let add = (a,b)=>{
    return a+b
}

let add2 = (a,b)=>(
    a+b
)
console.log(add2(2,4))