import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Home />
        <AboutUs />
      </div>
    </>
  );
}

export default App;
