import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
	const { products, currency, cart, removeFromCart, updateQuantity, navigate } =
		useContext(ShopContext);

	const [cartData, setCartData] = useState([]);

	useEffect(() => {
		const tempData = [];
		for (const items in cart) {
			for (const item in cart[items]) {
				if (cart[items][item] > 0) {
					tempData.push({
						id: items,
						size: item,
						quantity: cart[items][item],
					});
				}
			}
		}
		setCartData(tempData);
	}, [cart]);

	const handleInputChange = (itemId, size, value) => {
		// Ensure the value is a positive number
		const quantity = Math.max(Number(value), 1);

		// Update the cart state using the `updateQuantity` function
		updateQuantity(itemId, size, quantity);

		// Update the cartData state to immediately reflect changes
		setCartData((prevCartData) =>
			prevCartData.map((item) =>
				item.id === itemId && item.size === size ? { ...item, quantity } : item
			)
		);
	};

	return (
		<div className='border-t pt-14'>
			<div className='text-2xl mb-3'>
				<Title text1={'YOUR'} text2={'CART'} />
			</div>
			<div className=''>
				{cartData.map((item, index) => {
					const productData = products.find(
						(product) => product._id === item.id
					);
					return (
						<div
							key={index}
							className='py-4 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
						>
							<div className='flex items-start gap-6'>
								<img
									className='w-16 sm:w-20'
									src={productData.image[0]}
									alt=''
								/>
								<div>
									<p className='text-xs sm:text-lg font-medium'>
										{productData.name}
									</p>
									<div className='flex items-center gap-5 mt-2'>
										<p className='text-xs sm:text-lg font-medium'>
											{currency}
											{productData.price}
										</p>
										<p className='text-xs sm:text-lg font-medium px-2 sm:px-3 sm:py-1 border bg-slate-50'>
											{item.size}
										</p>
									</div>
								</div>
							</div>
							<input
								type='number'
								min={1}
								value={item.quantity} // Controlled input value
								onChange={(e) =>
									handleInputChange(item.id, item.size, e.target.value)
								}
								className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
							/>
							<img
								onClick={() => removeFromCart(item.id, item.size)}
								src={assets.bin_icon}
								alt=''
								className='w-4 mr-4 sm:w-5 cursor-pointer'
							/>
						</div>
					);
				})}
			</div>
			<div className='flex justify-end my-20'>
				<div className='w-full sm:w-[450px]'>
					<CartTotal />
					<div className='w-full text-end'>
						<button
							onClick={() => navigate('/place-order')}
							className='bg-orange-500 text-white text-sm my-8 px-8 py-3'
						>
							CHECKOUT
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;