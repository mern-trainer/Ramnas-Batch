import { FaShoppingBag, FaShoppingCart } from "react-icons/fa"
import { useCart } from "../Providers/CartProvider"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"

const CartPage = () => {
    
    const { cartList, setCartList } = useCart()

    const redirect = useNavigate()

    const handleRemoveProduct = id => {
        const res = cartList.filter(cart => cart.id != id)
        setCartList(res)
        return toast.success("Product removed from cart")
    }

    const handleQty = (action, product) => {
        if (action == "-" && product.quantity == 1) {
            return handleRemoveProduct(product.id)
        }
        const res = cartList.map(cart => {
            if(cart.id == product.id) {
                return { ...cart, quantity: cart.quantity + (action == "+" ? 1 : -1) }
            }
            return cart
        })
        return setCartList(res)
    }

    return <div className="container-fluid">
        <div className="text-end">
            <button className="my-1 btn btn-primary text-light" onClick={() => redirect("/shop")}><FaShoppingBag /> Shop</button>
        </div>
        <div className="row">
            {
                cartList.map(product => {
                    const disPrice = (product.price - ( product.price * product.discountPercentage / 100 )).toFixed(2)
                    return <div key={product.id} className="col-12 p-1 col-sm-6 col-md-4 col-xl-3 col-xxl-2">
                        <div className="bg-light p-1">
                            <div>
                                <img src={product.images[0]} alt={product.title} className="w-100" style={{aspectRatio: 1/1, objectFit: "contain"}}/>
                            </div>
                            <div className="text-center">
                                <h5 className="text-truncate">{product.title}</h5>
                                <div className="d-flex justify-content-between align-items-center">
                                    <s className="text-secondary">${product.price}</s>
                                    <div className="text-success">{product.quantity}x${disPrice}=${(disPrice * product.quantity).toFixed(2)}</div>
                                </div>
                                <div className="d-flex justify-content-between my-2 align-items-center">
                                    <button onClick={() => handleQty("-", product)} className="btn btn-success w-100">-</button>
                                    <div className=" w-100">{product.quantity}</div>
                                    <button onClick={() => handleQty("+", product)} className="btn btn-success w-100">+</button>
                                </div>
                                <button onClick={() => handleRemoveProduct(product.id)} className="btn btn-danger w-100 mt-2">Remove</button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default CartPage