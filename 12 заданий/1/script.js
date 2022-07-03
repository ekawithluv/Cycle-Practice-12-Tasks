const btn = document.querySelector('.btn');
const res = document.querySelector('.res');
btn.addEventListener ('click', function(e) {
    for (var i = 1; i <= 100; i++) {
	    res.innerHTML += i + '<br>';
    }
}
);