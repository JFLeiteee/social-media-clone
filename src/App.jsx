import LeftBar from "./components/LeftBar"
import Content from "./components/Content"
import data from "./data"
import { useState, useEffect } from "react"

import { Outlet, useNavigate } from "react-router-dom"

function App() {
  // Accounts data
  const [accounts, setAccount] = useState(data)
  // Set the id of the current account
  const [currentAccount, setCurrentAccount] = useState(1)

  const navigate = useNavigate();

  // Changes the current account
  function handleChange() {
    setCurrentAccount(event.target.value)
    return navigate("/")
  }

  // Changes the status to online for the current account 
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

  // Items to be displayed in every page
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
