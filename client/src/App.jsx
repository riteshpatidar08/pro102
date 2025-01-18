import React from 'react'
import {Routes,Route} from 'react-router-dom' ;
import Login from './components/Login';
import Register from './components/Register';
const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      </Routes>  
    </div>
  )
}

export default App
