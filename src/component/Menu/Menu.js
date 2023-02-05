import "./Menu.css";

const Menu = () => {
    const root = document.querySelector("#root");
    const menu = document.createElement("div");
    menu.classList.add("pages");
    menu.setAttribute("id", "menu");

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Today Menu";
    menu.appendChild(menuTitle);

    for(let i = 0 ; i < 3 ; i++){
        const menuFood = document.createElement("div");
        menuFood.classList.add("menuFood");
        // const menuFoodPic = document.createElement("img");
        // menuFoodPic = document.classList.add("menuFoodPic");
        const menuFoodDes = document.createElement("p");
        menuFoodDes.textContent = "testestest";
        menuFood.appendChild(menuFoodDes);
        menu.appendChild(menuFood);
    }
    root.appendChild(menu);
}

export default Menu;