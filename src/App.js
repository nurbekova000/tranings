import "./App.css";
import Authentication from "./pages/authentication/Authentication";
import HomePage from "./pages/homePage/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<Authentication />} />
      </Routes>
    </>
  );
}

export default App;
