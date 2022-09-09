import Burger from './components/Burger'
import Category from './components/Category'
import Header from './components/Header'

function App() {
  return (
    <div className=" rounded-3xl m-4 shadow-md shadow-slate-700 bg-[#F0EDE6]">
      <Header />
      <Category />
      <Burger />
    </div>
  )
}

export default App
