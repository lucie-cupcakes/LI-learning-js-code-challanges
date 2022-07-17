document.addEventListener('DOMContentLoaded', () => {

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
    function* trainGenerator() {
        yield 'Poughkeepsie';
        yield 'Newburgh';
        yield 'Peekskill';
        yield 'Yonkers';
        yield 'Bronx';
        yield 'Grand Central';
    }

    const gen = trainGenerator();
    const nextBtn = document.querySelector('#next-station-btn');

    nextBtn.addEventListener('click', () => {
        const { value, done } = gen.next();

        if (done) {
            console.log(`We made it!`);
            nextBtn.disabled = true;
        } else {
            console.log(`Current station: ${value}`);
        }
    })
});
