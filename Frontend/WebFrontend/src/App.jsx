
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'

function App() {
 
  return (
    <>
     <div>
      {/* <h1>hii</h1> */}
      <Router>
        <Routes>
          <Route path='/' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </Router>
     </div>
    </>
  )
}

export default App
