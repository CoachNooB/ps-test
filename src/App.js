import React, { useState } from 'react';


//components
import LoginForm from './components/Forms/LoginForm.component'
import ProfilePage from './components/Pages/Profile.pages'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState({})

  return(
    <div className="App">
      {
        isLoggedIn?
        <ProfilePage userData={userData} setUserData={setUserData} setIsLoggedIn={setIsLoggedIn} />
        :<LoginForm setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />
      }
    </div>
  )
}

export default App;
