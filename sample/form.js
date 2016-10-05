var dom = document.getElementById('dom');
var x = document.getElementById('x');
var y = document.getElementById('y');
var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    z = Number(x.value) + Number(y.value);

    dom.innerHTML = z;
});