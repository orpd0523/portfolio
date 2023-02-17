import Header from "./components/Header/Header.js" ;
import Main from "./components/Main/Main.js";
// import Sidebar from "./components/Sidebar/Sidebar.js";
import Hero from "./components/Hero/Hero"

function App() {
  return (
    <div className="App">
      {/* <Sidebar/> */}
      <Header/>
      <Hero/>
      <Main/>
    </div>
  );
}

export default App;
