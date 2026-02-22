import Menu from "./components/Menu.jsx";
import Home  from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Characters from "./pages/Characters.jsx";
import Character from "./pages/Character.jsx";
import Comics from "./pages/Comics.jsx";
import Footer from "./components/Footer.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';

export default function App () {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isComics = location.pathname === "/comics";
  const isCharacters = location.pathname === "/characters";

  return (
    <>
      {!isHome && <Menu />}
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:characterName" element={<Character />}/>
          <Route path="/comics" element={<Comics />} />
        </Routes>
      </div>
      {!isHome && !isComics && !isCharacters && <Footer />}
    </>
  )
}