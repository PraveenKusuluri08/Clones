import "./App.css";
import Header from "./components/Header";
import Accessories from "./assets/Accessories.jpg";
import Model3 from "./assets/Model3.jpeg";
import ModelS from "./assets/ModelS.jpeg";
import ModelX from "./assets/ModelX.jpeg";
import ModelY from "./assets/ModelY.jpeg";
import SolarRoof from "./assets/SolarRoof.jpeg";
import SolarPanels from "./assets/SolarPanels.jpeg";
import Item from "./components/Item";

function App() {
  return (
    <div className="app">
      <Header />
      <div class="app_itemsContainer">
        <Item
          title="Lowest Cost Solar Panels In America"
          desc="Money-back guarantee"
          descLink=""
          backgroundimg={SolarPanels}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="Model S"
          desc="$69,428"
          descLink=""
          backgroundimg={ModelS}
          leftBtnTxt="Custom Order"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"
          
        />
        <Item
          title="Model 3"
          desc="Money-back guarantee"
          descLink=""
          backgroundimg={Model3}
          leftBtnTxt="Custom Order"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"
         
        />
        <Item
          title="Model X"
          desc="Money-back guarantee"
          descLink=""
          backgroundimg={ModelX}
          leftBtnTxt="Custom Order"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"
         
        />
        <Item
          title="Model Y"
          desc="Money-back guarantee"
          descLink=""
          backgroundimg={ModelY}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"
          
        />
        <Item
          title="Solar for New Roofs"
          desc="Money-back guarantee"
          descLink=""
          backgroundimg={SolarRoof}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"
         
        />
        <Item
          title="Accessories"
          desc="Money-back guarantee"
          descLink=""
          backgroundimg={Accessories}
          leftBtnTxt="Order Now"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"

        />
      </div>
    </div>
  );
}

export default App;
