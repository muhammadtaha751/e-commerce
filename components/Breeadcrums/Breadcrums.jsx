import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

export const Breadcrums = (props) => {
const {product} = props;
console.log('product',product)
// if(!product){
//   return <div>...loading</div>
// }

  return (
    <div className='breadcrum'>
      
HOME <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" /> {product && product.category} <img src={arrow_icon} alt="" />{product && product.name}
    </div>
  )
}
