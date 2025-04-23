import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Restaurant } from './pages/Restro.jsx'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/restro.html' element={<Restaurant />} />

        {/* </Route> */}
      </Routes>
    </BrowserRouter>

  )
}

export default App
