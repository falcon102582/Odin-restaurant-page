import "./Nav.css"

const Nav = () => {
    const header = document.createElement('header');

    const homePageLink = document.createElement('span');
    homePageLink.textContent = "Home";
    homePageLink.setAttribute("id", "homepagelink")

    const menuLink = document.createElement('span');
    menuLink.textContent = "Menu";
    menuLink.setAttribute("id", "menulink");

    const contactLink = document.createElement('span');
    contactLink.textContent = "Contact";
    contactLink.setAttribute("id", "contactlink");

    // document.querySelector("#homepagelink").addEventListener("click", () => console.log("homePageLink"))
    // document.querySelector("#menulink").addEventListener("click", () => console.log("menulink"))
    // document.querySelector("#contactlink").addEventListener("click", () => console.log("contactlink"));

    const navList = [homePageLink, menuLink, contactLink];

    for(const nav of navList){
        header.appendChild(nav);
    }

    return header
}

export default Nav;