import Nav from "./component/Nav/Nav";
import HomePage from "./component/Homepage/Homepage";
import Menu from "./component/Menu/Menu";
import Contact from './component/Contact/Contact';
import "./index.css";

const root = document.querySelector("#root");
root.appendChild(Nav());

HomePage();
Menu();
Contact();

const pages = document.querySelectorAll(".pages")

const reset = (link) => {
    for(const page of pages){
        if(link !== page.id){
            page.style.display = "none"
        }
        else{
            page.style.display = "block";
        }
    }
}

document.querySelector("#homepagelink").addEventListener("click", () => {
    reset("homepage")
})
document.querySelector("#menulink").addEventListener("click", () => {
    reset("menu");
})
document.querySelector("#contactlink").addEventListener("click", () => {
    reset("contact")
});