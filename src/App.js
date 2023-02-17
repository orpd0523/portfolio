import Header from "./components/Header/Header.js";
// import Sidebar from "./components/Sidebar/Sidebar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.js";
import AboutPage from "./pages/AboutPage/AboutPage.js";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.js";
import ContactPage from "./pages/ContactPage/ContactPage.js";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Sidebar/> */}
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/about" element={<AboutPage/>} />
          <Route exact path="/projects" element={<ProjectsPage/>} />
          <Route exact path="/contact" element={<ContactPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
