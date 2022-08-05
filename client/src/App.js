import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


const App = () => {
  return (
   <Router>
     <div className='App'>
     <Routes>

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
