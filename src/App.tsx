import AboutUs from "./components/AboutUs";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20 bg-gradient-to-b from-white from-80% to-primary-50">
        <Home />
        <AboutUs />
        <Products />
        <Benefits />
        <Footer />
      </div>
    </>
  );
}

export default App;
