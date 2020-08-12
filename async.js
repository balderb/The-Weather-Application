
// window.onload = function () {
    
//    var hhtp = new XMLHttpRequest();
    
// };

/*  READY STATES

0 - request not initialized
1 - request has been set up
2 - request has been sent
3 - request is in process
4 - request is complete

*/

// console.log('About to fetch a rainbow'); 

fetch('rainbow.jpg').
    then(response => {
    console.log(response);
    return response.blob();
})
.then(blob => {
    console.log(blob);
    document.getElementById('weather').src = URL.createObjectURL (blob);
});








