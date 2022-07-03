const btn = document.querySelector('.btn');
const res = document.querySelector('.res');
btn.addEventListener ('click', function(e) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }
    res.innerHTML = sum;
}           
);