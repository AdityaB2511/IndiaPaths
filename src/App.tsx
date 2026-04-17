import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Homepage from "./pages/Homepage";
import Navmenu from "./components/Navigation/Navmenu";
import TrekDetails from "./components/Home/Treks/TrekDetails";

function App() {

  return (
    <div
      className="w-full h-full overflow-auto"
      style={{ background: "#f7f5f0" }}
      id="app-wrapper"
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navmenu />
                <Homepage />
              </>
            }
          />
          <Route path="/TrekDetails" element={<TrekDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
