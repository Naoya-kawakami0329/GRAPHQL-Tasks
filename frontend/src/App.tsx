import './App.css'
import Main from './components/Main'
import NotFound from './components/NotFound'
import SignIn from './components/SIgnIn'
import SignUp from './components/SignUp'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/singin' element={<SignIn/>}/>
      <Route path='/signup' element={ <SignUp/>}/>
      <Route path='/' element={ <Main/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
