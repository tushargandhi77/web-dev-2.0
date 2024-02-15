setInterval(() => {
    var d = new Date()
    document.getElementById('clock').innerHTML = d.toLocaleTimeString()


    var d2 = new Date();
    var options = { timeZone: 'Europe/Moscow' }; 
    document.getElementById('clock_1').innerHTML = d2.toLocaleTimeString('en-US', options);

    var d1 = new Date();
    var options = { timeZone: 'Asia/Tokyo' }; 
    document.getElementById('clock_2').innerHTML = d1.toLocaleTimeString('en-US', options);
}, 1000)