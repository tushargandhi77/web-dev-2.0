// function outer(){
//     console.log("This is outer function")
//     function inner(){
//         console.log("This is the  inner fucntion")
//     }
//     return inner
// }

// var res = outer()
// res()

// setInterval(function(){
//     console.log("Hello>>>")
// },1000)

var d = new Date()
console.log(d.toLocaleDateString())
console.log(d.toLocaleTimeString())

// document.getElementById('clock').innerHTML = d.toLocaleTimeString()

setInterval(function(){
    var d = new Date()
    document.getElementById('clock').innerHTML = d.toLocaleTimeString()
},1000)
