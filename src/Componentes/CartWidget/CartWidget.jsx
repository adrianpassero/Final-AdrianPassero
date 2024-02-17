import { useContext } from 'react'
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext)

  return (
    <div>
      <Link to="/cart">
        <img className='imgCarrito' src="./img/carrito_compras.png" alt="Carrito" />
        {
          cantidadTotal > 0 && <strong className='cantidadCarrito'> {cantidadTotal} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget