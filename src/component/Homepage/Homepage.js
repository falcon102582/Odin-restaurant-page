import "./HomePage.css";

function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../../img/', false, /\.(png|jpe?g|svg)$/));

const HomePage = () => {
    const root = document.querySelector("#root");
    const homepage = document.createElement('div');
    homepage.setAttribute("id", "homepage");
    homepage.classList.add("pages");

    const homepageTitle = document.createElement('h1')
    const homepageContent = document.createElement('p');
    const foodDisplay = document.createElement('div');

    foodDisplay.classList.add("foodDisplay");

    homepageTitle.textContent = "Welcom to Jerry's restaurant!"
    homepageContent.textContent = "We have been keen on our customer services and innovation. Our food has always added value to our customer’s everyday life. We always try to give the best high-quality services to our customers."
    
    for(let i = 0 ; i < 3 ; i++){
        const food = document.createElement("img");
        food.src = images[i]
        food.classList.add('food')
        foodDisplay.appendChild(food);
    }

    homepage.appendChild(homepageTitle)
    homepage.appendChild(homepageContent)
    homepage.appendChild(foodDisplay);
    root.appendChild(homepage);
}

export default HomePage;