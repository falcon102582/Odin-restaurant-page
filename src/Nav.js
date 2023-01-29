const Nav = () => {
    const header = document.createElement('header');
    header.style = (
        "display: flex; justify-content: center")

    const homePageLink = document.createElement('span');
    homePageLink.textContent = "Home";

    const menuLink = document.createElement('span');
    menuLink.textContent = "Menu";

    const contactLink = document.createElement('span');
    contactLink.textContent = "Contact";

    const navList = [homePageLink, menuLink, contactLink];

    for(const nav of navList){
        header.appendChild(nav);
    }

    return header
}

export default Nav;