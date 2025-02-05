import "./App.css";
import Section1 from "./Components/BodySection/Section-1";
import Section2 from "./Components/BodySection/Section-2";
import Header from "./Components/HeaderSection/Header";
import Navbar from "./Components/NavbarSection/Navbar";

function App() {
  return (
    <>
      <div>
        <Header/>
        <Navbar/>
        <Section1/>
        <Section2/>
      </div>
    </>
  );
}

export default App;
