/**
 * Created by Deyan Peychev on 22-Jun-17.
 */
function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', move);
    gradient.addEventListener('mouseout', out);

    function move(event) {
        let x = event.offsetX;
        let percentage = x / (this.clientWidth - 1);
        percentage = Math.trunc(percentage * 100);
        document.getElementById('result').textContent = `${percentage}%`;
    }
    function out() {
        document.getElementById('result').textContent = ``;
    }
}