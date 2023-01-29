import Nav from "./Nav";

const HomePage = () => {
    const root = document.querySelector("#root");
    root.appendChild(Nav());
}

export default HomePage;