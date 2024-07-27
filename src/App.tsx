import AboutUs from "./components/AboutUs";
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
      </div>
    </>
  );
}

export default App;
