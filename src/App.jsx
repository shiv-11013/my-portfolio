import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MainPortfolio from "./pages/MainPortfolio";
import ProjectsPortfolio from "./pages/projectsPortfolio";
import TechStack from "./pages/TechStack";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToButton from "./components/ScrollToTopButton";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MainPortfolio />
      <ProjectsPortfolio />
      <TechStack />
      <Contact />
      <Footer />
      <ScrollToButton />
    </BrowserRouter>
  );
}
export default App;
