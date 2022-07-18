document.addEventListener('DOMContentLoaded', async () => {
    const removeLoaders = () => Array.from(document.querySelectorAll(".loading")).forEach((el) => el.remove())
    const friendsListEl = document.querySelector("#friends-list");

    try {
        const dataRequest = await fetch("https://randomuser.me/api/?results=5")
        const { results : friends } = await dataRequest.json();

        for (const friend of friends) {
            const li = document.createElement("li");
            const div = document.createElement("div");
            const nameP = document.createElement("p");
            const locationP = document.createElement("p");
            const img = document.createElement("img");

            div.classList.add("friend-card");
            nameP.classList.add("friend-name-p");
            locationP.classList.add("friend-location-p");

            nameP.textContent = `${friend.name.first} ${friend.name.last}`;
            locationP.textContent = `Location: ${friend.location.city}`;
            
            img.src = friend.picture.thumbnail;
            div.appendChild(img);
            div.appendChild(nameP);
            div.appendChild(locationP);
            li.appendChild(div);
            friendsListEl.appendChild(li);
        }

    } catch(errorMessage) {
        const errP = document.createElement("p");
        errP.classList.add("error");
        errP.textContent = errorMessage.toString();
        document.body.appendChild(errP);
    } finally {
        removeLoaders();
    }
    
});