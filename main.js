var input = document.getElementById('input');
function calculate(e){ input.value += e; }

function clean(){ input.value = ''; }

function result(){ input.value = eval(input.value); }