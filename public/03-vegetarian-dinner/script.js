document.addEventListener('DOMContentLoaded', () => {
    const dishes = [
        {
            name: "Eggplant Parmesan",
            vegetarian: true
        },
        {
            name: "Spaghetti & Meatballs",
            vegetarian: false
        },
        {
            name: "Spiced Chicken",
            vegetarian: false
        },
        {
            name: "Rice and Beans",
            vegetarian: true
        }
    ];

    console.log('dishes', dishes);
    
    const orderedList = document.createElement('ol');
    const vegetarianMenu = dishes.filter((dish) => dish.vegetarian);
    console.log('vegetarianMenu', vegetarianMenu);
    
    vegetarianMenu.forEach((dish) => {
        const li = document.createElement('li');
        li.innerText = dish.name;
        orderedList.appendChild(li)
    });

    document.body.appendChild(orderedList);
});
