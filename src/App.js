import Home from './pages/Home'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="rounded-3xl m-4 shadow-md shadow-slate-700 bg-[#F0EDE6]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
