import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext)
    return (
        <div className='cartitem'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
{all_product.map((e)=>{
if(cartItems[e.id > 0])
{
    return  <div>
    <div className="cartitems-format cartitems-format-main">
        <img className='carticon-product-icon' src={e.image} alt="" />
        <p>{e.name}</p>
        <p>{e.new_price}</p>
        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
        <p>{e.new_price*CartItems[e.id]}</p>
        <img className='cartitems-remove-icon' src={remove_icon} onClick={removeFromCart(e.id)} alt="" />
    </div>
    <hr />
</div>
}
return null
})}
           
           
        </div>
    )
}
