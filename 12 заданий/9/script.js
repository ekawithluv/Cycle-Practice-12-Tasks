const btn = document.querySelector('.btn');
const res = document.querySelector('.res');
btn.addEventListener ('click', function(e) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];        
    for (var i = 0; i < arr.length; i++) {        
        if(arr[i] == 5) {
            res.innerHTML = 'Есть!';
            break;
        }
    }
}
);