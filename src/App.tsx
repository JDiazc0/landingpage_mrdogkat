import AboutUs from "./components/AboutUs";
import Benefits from "./components/Benefits";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Home />
        <AboutUs />
        <Products />
        <Benefits />
      </div>
    </>
  );
}

export default App;
