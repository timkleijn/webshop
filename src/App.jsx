import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/navbar'
import { Cart } from './pages/cart/cart'
import { Shop } from './pages/shop/shop'
import { ShopcontextProvider } from './context/shop-context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='font-sans'>
      <ShopcontextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/shop' element={<Shop />} />

          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      </ShopcontextProvider>
      </div>
    </div>
  )
}

export default App
