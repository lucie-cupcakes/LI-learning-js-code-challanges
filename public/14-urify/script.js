const URLify = (str) => {
    // remove punctuation
    const punctuation = /[.,/#!$%^&*;:{}=!\-_`~()'"]/g;
    str = str.replaceAll(punctuation, '');

    // convert to lower case, and replace spaces to hypens
    return str.toLowerCase().trim().replaceAll(' ', '-');
}

document.addEventListener('DOMContentLoaded', () => {
    const resultPre = document.querySelector('#result-pre');
    const userInput = document.querySelector('#user-input-text');
    document.querySelector('#accept-btn').addEventListener('click', () => {
        resultPre.textContent = URLify(userInput.value);
    });
});