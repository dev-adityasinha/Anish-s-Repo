import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Restaurant } from './pages/Restro.jsx'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/https://anish-s-repo.vercel.app/restro.html' element={<Restaurant />} />

        {/* </Route> */}
      </Routes>
    </BrowserRouter>

  )
}

export default App
