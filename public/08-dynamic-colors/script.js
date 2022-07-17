// wait for DOM to be ready.
document.addEventListener('DOMContentLoaded', () => {

    function changeColor(color) {
        document.body.style.backgroundColor = color;
    }

    function createButton(color) {
        const btn = document.createElement('input');
        btn.type = 'button';
        btn.addEventListener('click', () => changeColor(color));
        btn.value = color;
        return btn;
    }

    [createButton('yellow'), createButton('blue'), createButton('orange')].forEach(el => document.body.appendChild(el))
});
