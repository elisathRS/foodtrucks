import './App.css';
import Foodtruck from './components/Foodtruck';

const App = () => {

  return (
    <div className="App">
      <img src="/src/assets/tentv2.png"></img>
      <h1>Food Truck Favorite</h1>
      <div className="vertical-container">
      <Foodtruck imageUrl={"/src/assets/truck1.png"} name ={"Over the Rainbow"} cuisineType="Mexican"></Foodtruck>
      <Foodtruck imageUrl={"/src/assets/truck2.jpeg"} name ={"Mainely Burgers"} cuisineType="Colombian"></Foodtruck>
      <Foodtruck imageUrl={"/src/assets/truck3.jpeg"} name ={"Skewers Stek"} cuisineType="Brazilian"></Foodtruck>
      </div>
      <div className="vertical-container">
      <Foodtruck imageUrl={"/src/assets/truck4.jpg"} name ={"Chifa Food"} cuisineType="Peruvian"></Foodtruck>
      <Foodtruck imageUrl={"/src/assets/truck5.jpg"} name ={"Little India"} cuisineType="Indian"></Foodtruck>
      <Foodtruck imageUrl={"/src/assets/truck6.png"} name ={"Chile House"} cuisineType="Chilean"></Foodtruck>
      </div>
      <div className="vertical-container">
      <Foodtruck imageUrl={"/src/assets/truck7.jpg"} name ={"Cuban guys"} cuisineType="Cuban"></Foodtruck>
      <Foodtruck imageUrl={"/src/assets/truck8.jpg"} name ={"Argentina Grill"} cuisineType="Argentinan"></Foodtruck>
      <Foodtruck imageUrl={"/src/assets/truck9.jpg"} name ={"Asian Buns"} cuisineType="Chinese"></Foodtruck>
      </div>
      <div className="vertical-container">
      <Foodtruck imageUrl={"/src/assets/truck10.jpg"} name ={"Paella Depot"} cuisineType="Spanish"></Foodtruck>
      <Foodtruck imageUrl={"/src/assets/truck11.jpg"} name ={"Twisted Greek"} cuisineType="Greek"></Foodtruck>
      <Foodtruck imageUrl={"/src/assets/truck12.jpg"} name ={"Mini Picateria"} cuisineType="Ecuadorian"></Foodtruck>
      </div>
    </div>
  )
}

export default App