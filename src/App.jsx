import "./App.css";
import Choose from "./pages/Choose";
import Homepage from "./pages/HomePage";
import Services from "./pages/ServicesPage";

function App() {


  return (
    <>
      <div className="main">
        <Homepage />
        <Services></Services>
        <Choose />
      </div>
    </>
  );
}

export default App;
