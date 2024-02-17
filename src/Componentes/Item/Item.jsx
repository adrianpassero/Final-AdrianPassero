import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className="producto-container">
      <img src={img} alt={nombre} className="producto-imagen" />
        <h3 className="producto-nombre">Nombre: {nombre}</h3>
        <p className="producto-id">ID: {id}</p>
        <p className="producto-precio">Precio: ${precio}</p>
        <Link className="ver-detalles-btn" to={`/item/${id}`}> VER DETALLES </Link>
    </div>
  )
}

export default Item