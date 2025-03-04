let value = 0;
function incrementValue() {
    value += 1;
    document.getElementById('valueDisplay').textContent = value;
    console.log(value);
}

function decrementValue() {
    value -=1;
    document.getElementById('valueDisplay').textContent = value;
    console.log(value);
}