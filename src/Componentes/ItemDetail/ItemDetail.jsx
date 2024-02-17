import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import './ItemDetail.css'

const ItemDetail = ({ id, nombre, stock, precio, img, descripcion }) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const { agregarAlCarrito } = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)

    const item = { id, nombre, precio}
    agregarAlCarrito(item, cantidad)

    }

    return (
      <div className='card'>
        <h3 className='card-title'>Nombre: {nombre} </h3>
        <div className='card-body'>
        <h4 className='card-text'>Precio: ${precio} </h4>
        <p className='card-text'>ID: {id} </p>
        <p className='card-text'>Stock: {stock} </p>
        <p className='card-text'>Descripcion: {descripcion}</p>
        <img className='card-img-top' src={img} alt={nombre} />

        {
        agregarCantidad > 0 ? (<Link className='btn btn-primary' to="/cart"> Terminar compra </Link>) : (<ItemCount inicial = {1} stock = {stock} funcionAgregar = {manejadorCantidad} />)
        }
        </div>
      </div>

    )
  }

  export default ItemDetail