import LeftBar from "./components/LeftBar"
import Content from "./components/Content"
import data from "./data"
import { useState, useEffect } from "react"

import { Outlet } from "react-router-dom"

function App() {
  const [accounts, setAccount] = useState(data)
  const [currentAccount, setCurrentAccount] = useState(1)

  function handleChange() {
    setCurrentAccount(event.target.value)
  }

  useEffect(() => {
    const newStatus = accounts.map(obj => {
      if(obj.id == currentAccount){
        return {...obj, online: true}
      } else {
        return {...obj, online: false}
      }
    })

    setAccount(newStatus);
  }, [currentAccount])

  return (
    <div id="geral-container">
      <LeftBar 
        accounts={accounts}
        handleChange={handleChange}
        currentAccount={currentAccount}
      />
      <div className="outlet">
        <Outlet 
          context={[accounts, currentAccount]}
        />
      </div>
    </div>
  )
}

export default App
