const btn = document.querySelector('.btn');
const res = document.querySelector('.res');
btn.addEventListener ('click', function(e) {
    var arr = [-2, 5, 3, -4, 15, 8, 10];
    for (var i = 0; i < arr.length; i++) {
	    if(arr[i] > 0 && arr[i] < 10) {
            res.innerHTML += arr[i] + '; ';
        }
    }
}
);