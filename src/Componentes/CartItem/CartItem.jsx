import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import './CartItem.css'

const CartItem = ({ item, cantidad }) => {
    const { eliminarProducto } = useContext(CarritoContext);

    const handleEliminarProducto = () => {
        eliminarProducto(item.id);
    };

    return (
        <div className="cartItem">
            <div className="itemInfo">
                <h4 className="itemTitulo"> {item.nombre}  </h4>
                <p className="itemCantidad"> Cantidad: {cantidad} </p>
                <p className="itemPrecio"> Precio: ${item.precio} </p>
            </div>
            <div className="itemImagen">
                <img src={item.img} alt="" />
            </div>
            <button className="btnEliminar" onClick={handleEliminarProducto}>Eliminar</button>
        </div>
    );
};

export default CartItem;
