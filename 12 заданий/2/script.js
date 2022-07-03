const btn = document.querySelector('.btn');
const res = document.querySelector('.res');
btn.addEventListener ('click', function(e) {
    for (var i = 100; i > 0; i--) {
	    res.innerHTML += i + '<br>';
    }
}
);