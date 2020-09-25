let slider = document.getElementById('slider');
let valueUsed = document.getElementById('valueUsed');
let valueLeft = document.getElementById('valueLeft');

valueUsed.innerHTML = slider.value;
valueLeft.innerHTML = slider.max - slider.value;


slider.addEventListener('input', function() {
    valueUsed.innerHTML = this.value;
    valueLeft.innerHTML = slider.max - this.value;
})
