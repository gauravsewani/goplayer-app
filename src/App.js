import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      {/* <h1>Batman</h1> */}
      <GlobalStyles />
      <Nav />
      <Routes>
        {["/game/:id", "/"].map((path) => (
          <Route path={path} element={<Home />} key={path} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
