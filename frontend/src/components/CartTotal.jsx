import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
	const { currency, deliveryFee, calculateCartAmount } =
		useContext(ShopContext);

	return (
		<div className='w-full'>
			<div className='text-2xl'>
				<Title text1={'Cart'} text2={'Total'} />
			</div>
			<div className='flex flex-col gap-2 mt-2 text-lg'>
				<div className='flex justify-between'>
					<p>Subtotal:</p>
					<p>
						{currency} {calculateCartAmount()}.00
					</p>
				</div>
				<hr />
				<div className='flex justify-between'>
					<p>Shipping Fee</p>
					<p>
						{currency} {deliveryFee}.00
					</p>
				</div>
				<hr />
				<div className='flex justify-between'>
					<p>Total</p>
					<b>
						{currency}{' '}
						{calculateCartAmount() === 0
							? 0
							: calculateCartAmount() + deliveryFee}.00
					</b>
				</div>
			</div>
		</div>
	);
};

export default CartTotal;
