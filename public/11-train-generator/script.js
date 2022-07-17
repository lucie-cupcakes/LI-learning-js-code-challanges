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

    document.querySelector('#next-station-btn').addEventListener('click', () => {
        const { value, done } = gen.next();

        if (done) {
            console.log(`There are no more stations.`);
        } else {
            console.log(`Current station: ${value}`);
        }
    })
});
