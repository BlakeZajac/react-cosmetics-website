import "../src/index.scss";
import { Navbar, Hero, Map, Footer } from "./components";
import { Products, Benefits, Reviews } from "./containers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
      {/* <Benefits />
      <Reviews />
      <Map />
      <Footer /> */}
    </div>
  );
}

export default App;
