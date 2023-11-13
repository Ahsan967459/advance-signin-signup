import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className='w-full h-screen bg-white text-black'>
      <Navbar/>
      <Outlet/>
      
    </div>
  )
}

export default App
