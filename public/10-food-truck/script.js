document.addEventListener('DOMContentLoaded', () => {
    const getMasterMenu = (vendorMenus) => new Set(vendorMenus.flat());

    const foodTruckMenus = [
        ['pizza', 'calzone', 'rice and beans'],
        ['pizza', 'pasta', 'focaccia'],
        ['lobster', 'chicken'],
        ['calzone', 'hamburguer'],
        ['beef', 'chicken']
    ];

    const unorderedList = document.querySelector('#combined-menu');
    getMasterMenu(foodTruckMenus).forEach(dishName => {
        const listItem = document.createElement('li');
        listItem.textContent = dishName;
        unorderedList.appendChild(listItem);
    })
    document.body.appendChild(unorderedList);
});
