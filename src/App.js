import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Program from "./pages/program/program";
import Register from "./pages/register/Register";
import TeamProfi from "./pages/teamProfi/TeamProfi";
import Training from "./pages/training/Training";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Program />
      <Register />
      <Training />
      <TeamProfi />
    </>
  );
}

export default App;
