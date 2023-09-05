import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComp from "./portfolio/homeComp";
import AboutComp from "./portfolio/aboutComp";
import ContactComp from "./portfolio/contactComp";
import MyProjectsComp from "./portfolio/myProjects";
import CountdownTimer from "./portfolio/projects/countdown timer/countdownTimer";
import ProductCard from "./portfolio/projects/product card/productCard";
import WeatherApp from "./portfolio/projects/weather app/tempapp";
import FlexStart from "./portfolio/projects/flexstart/flexStart";
import FoodWebpage from "./portfolio/projects/food webpage/foodWebpage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComp />}></Route>
          <Route path="/about" element={<AboutComp />}></Route>
          <Route path="/contact" element={<ContactComp />}></Route>
          <Route path="/my projects" element={<MyProjectsComp />}></Route>
          <Route path="https://www.linkedin.com/in/akshat-bari-45531b256"></Route>
          <Route path="https://www.instagram.com/akshat_bari/"></Route>
          <Route path="/timer" element={<CountdownTimer />}></Route>
          <Route path="/productCard" element={<ProductCard />}></Route>
          <Route path="/weatherApp" element={<WeatherApp />}></Route>
          <Route path="/flexstart" element={<FlexStart />}></Route>
          <Route path="/responsiveFoodWebpage" element={<FoodWebpage />}></Route>
          <Route path="https://qumash-world.onrender.com"></Route>
          <Route path="https://akshatbari02.github.io/Amplify/"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
