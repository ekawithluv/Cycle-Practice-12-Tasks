const btn = document.querySelector('.btn');
const res = document.querySelector('.res');
btn.addEventListener ('click', function(e) {
    var arr = [];
	for (var i = 1; i <= 10; i++) {
        arr.push(i);	
	    res.innerHTML = arr;
    }
}
);