import LeftBar from "./components/LeftBar"
import Content from "./components/Content"

import { Outlet } from "react-router-dom"

function App() {

  return (
    <div id="geral-container">
      <LeftBar />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  )
}

export default App
