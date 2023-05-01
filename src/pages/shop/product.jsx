import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];

    return (
        <div className='m-2 col-span-1'>
            <div className='w-full p-4 flex justify-between lg:flex-col items-center border border-gray-200 h-full'>
                <img src={productImage} className='w-20 h-20 lg:w-40 lg:h-40 object-contain' />
                <div className='flex flex-1 ml-4 lg:ml-0 flex-col lg:grid lg:grid-cols-3 lg:w-full mt-'>
                    <h3 className='lg:col-span-2 font-semibold text-xl lg:my-auto'>{productName}</h3>
                    <h3 className='lg:col-span-1 font-bold lg:text-right lg:my-auto'>
                        <span className='text-3xl'>{Math.floor(price)}.</span>
                        <span className='text-lg'>{(((price - Math.floor(price))) * 100).toFixed(0)}</span>
                    </h3>
                </div>
                <div className='flex lg:w-full justify-between mt-3'>
                    <button onClick={() => removeFromCart(id)} className={cartItemAmount > 0 ? 'text-white bg-secondary rounded-full hover:bg-secondaryhover' : 'invisible'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                        </svg>

                    </button>
                    {cartItemAmount > 0 && <div className={cartItemAmount > 0 ? 'visible text-xl' : 'invisible'}>{cartItemAmount}</div>}
                    <button onClick={() => addToCart(id)} className='text-white bg-secondary rounded-full hover:bg-secondaryhover'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 p-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
