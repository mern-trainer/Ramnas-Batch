import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { api } from "../axios"
import { FaShoppingCart, FaStar } from "react-icons/fa"
import { useCart } from "../Providers/CartProvider"
import { useNavigate } from "react-router"

const ShopPage = () => {
    
    const [products, setProducts] = useState([])
    const { cartList, setCartList } = useCart()
    const [filteredProducts, setFilteredProducts] = useState([])
    const [query, setQuery] = useState("")

    const redirect = useNavigate()

    const fetchProducts = async () => {
        try {
            const { data } = await api.get("/products")
            setProducts(data.products)
            setFilteredProducts(data.products)
        } catch (err) {
            return toast.error("Error while fetching products.")   
        }
    }
 
    useEffect(() => {
        fetchProducts()
    }, [])

    const handleSearch = () => {
        const res = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()))
        setFilteredProducts(res)
    }

    useEffect(() => {
        handleSearch()
    }, [query])

    const handleAddToCart = product => {
        const index = cartList.findIndex((cart) => cart.id == product.id)
        if (index > -1) {
            const res = cartList.map(cart => {
                if(cart.id == product.id) {
                    return {...cart, quantity: cart.quantity + 1}
                }
                return cart
            })
            toast.success("Product updated")
            return setCartList(res)
        }
        setCartList(cartList => [...cartList, { ...product, quantity: 1 }])
        return toast.success("Product added to cart")
    }

    return <div className="container-fluid">
        <div className="text-end">
            <button className="my-1 btn btn-primary text-light" onClick={() => redirect("/shop/cart")}><FaShoppingCart /> Cart</button>
        </div>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>
        <div className="row">
            {
                filteredProducts.map(product => {
                    const disPrice = (product.price - ( product.price * product.discountPercentage / 100 )).toFixed(2)
                    return <div key={product.id} className="col-12 p-1 col-sm-6 col-md-4 col-xl-3 col-xxl-2">
                        <div className="bg-light p-1">
                            <div>
                                <img src={product.images[0]} alt={product.title} className="w-100" style={{aspectRatio: 1/1, objectFit: "contain"}}/>
                            </div>
                            <div className="text-center">
                                <h5 className="text-truncate">{product.title}</h5>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className={`d-flex align-items-center gap-1 ${product.rating < 3 ? "text-danger" : product.rating < 4 && product.rating >= 3 ? "text-warning" : "text-success"}`}><FaStar /> {product.rating}</div>
                                    <div>
                                        <s className="text-secondary">${product.price}</s>
                                        <div className="text-success">${disPrice}</div>
                                    </div>
                                </div>
                                <button onClick={() => handleAddToCart(product)} className="btn btn-success w-100 mt-2">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default ShopPage