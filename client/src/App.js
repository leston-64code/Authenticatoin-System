import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

// Routing 
import Login from "./components/screens/Login"
import Register from "./components/screens/Register"

import PrivateRoute from "./components/routing/PrivateRoute"

const App = () => {
  return (
   <Router>
    {/* <Login/> */}
    <Register/>
     <div className='App'>
     <Routes>

    {/* <PrivateRoute path="/" element={<></>}/> */}

     <Route path='/login' element={<></>}> </Route>
     <Route path='/register' element={<></>}> </Route>
     <Route path='/forgotpassword' element={<></>}> </Route>
     <Route path='/passwordreset/:resetToken' element={<></>}> </Route>

     </Routes>
    </div>
   </Router>
  )
}

export default App
