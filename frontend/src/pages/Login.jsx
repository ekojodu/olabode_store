import { useState } from 'react';

const Login = () => {
	const [currentState, setCurrentState] = useState('Sign Up');
	const onSubmitHandler = async (e) => {
		e.preventDafault();
	};
	return (
		<form
			onSubmit={onSubmitHandler}
			className='flex flex-col itens-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 min-h-[45vh]'
		>
			<div className='inline-flex items-center gap-2 mb-2 mt-10'>
				<p className='prata-regular text-3xl'>{currentState}</p>
				<hr className='border-none h-[1.5px] w-8 bg-gray-800' />
			</div>
			{currentState === 'Login' ? (
				''
			) : (
				<input
					type='text'
					placeholder='Name'
					required
					className='w-full px-3 py-2 border border-gray-800'
				/>
			)}
			<input
				type='email'
				placeholder='Email'
				required
				className='w-full px-3 py-2 border border-gray-800'
			/>
			<input
				type='password'
				placeholder='Password'
				required
				className='w-full px-3 py-2 border border-gray-800'
			/>
			<div className='w-full flex justify-between text-sm mt-[-8px]'>
				{currentState === 'Login' ? (
					<p className='cursor-pointer'>Forgot your Password</p>
				) : (
					<p className='cursor-pointer'>Already Have an account?</p>
				)}
				{currentState === 'Login' ? (
					<p
						className='cursor-pointer'
						onClick={() => setCurrentState('Sign Up')}
					>
						Create Account
					</p>
				) : (
					<p
						onClick={() => setCurrentState('Login')}
						className='cursor-pointer'
					>
						Login Here
					</p>
				)}
			</div>
			<button className='bg-orange-500 py-2 text-white text-sm rounded-full px-8 mt-4'>
				{currentState === 'Login' ? 'Sign In' : 'Sign Up'}
			</button>
		</form>
	);
};

export default Login;
