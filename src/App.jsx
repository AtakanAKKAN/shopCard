import { useContext } from 'react'
import './App.css'
import Card from './components/Card'
import First from './components/First'
import Products from './components/Products'
import "./index.css"
import { CardContext } from './Context/CartContect'

function App() {

 const {cart} = useContext(CardContext)

  return (
    <div className='container mx-auto p-4'>
      <First />
     <Products />
     {cart.length > 0 && <Card />}
    </div>
  )
}

export default App
