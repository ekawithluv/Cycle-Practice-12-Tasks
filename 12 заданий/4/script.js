const btn = document.querySelector('.btn');
const res = document.querySelector('.res');
btn.addEventListener ('click', function(e) {
    var arr = [];
	for (var i = 0; i < 10; i++) {
		arr[i] = 'x';	
		res.innerHTML = arr;
	}
}
);