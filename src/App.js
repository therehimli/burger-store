import Header from './components/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="rounded-3xl m-4 shadow-md shadow-slate-700 bg-[#F0EDE6]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
