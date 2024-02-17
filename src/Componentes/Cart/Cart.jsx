import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link className="miBtn" to="/"> Ver Productos </Link>
            </>
        )
    }
    return (
        <div>
            {
                carrito.map(prod => <CartItem key={prod.id} {...prod} />)
            }
            <h3> Total:$ {total}  </h3>
            <button className="miBtn" onClick={()=> vaciarCarrito()}> Vaciar Carrito </button>
            <Link className="miBtn" to="/checkout"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart