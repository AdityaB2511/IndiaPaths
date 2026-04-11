import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Homepage'
import Navmenu from './NavigaionMenu/Navmenu'

function App() {
  return (
    <div className="w-full h-full overflow-auto" style={{ background: "#f7f5f0" }} id="app-wrapper">
      <Navmenu />
      <BrowserRouter basename="/IndiaPaths/">
        <Routes>
           <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
