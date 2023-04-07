import Header from "./components/Header/Header.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.js";
import AboutPage from "./pages/AboutPage/AboutPage.js";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.js";
import ContactPage from "./pages/ContactPage/ContactPage.js";
import useDarkModeStore from "./stores/darkModeStore.js";

function App() {
  const { dark } = useDarkModeStore();
  const black = dark ? "" : "dark-mode";
  return (
    <div className={`app ${black}`}>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
