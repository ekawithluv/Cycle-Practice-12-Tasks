const btn = document.querySelector('.btn');
const res = document.querySelector('.res');
btn.addEventListener ('click', function(e) {
    for (var i = 2; i < 100; i += 2) {
	    res.innerHTML += i + '<br>';
    }
}
);