import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from "axios";
import '../../src/scss/AuthModal.scss';

const AuthModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div>
			<button className='Log-in-btn' onClick={openModal}>Log in</button>
			<Modal className='modal' isOpen={isOpen} onRequestClose={closeModal}>
				<form className='login-form'>
					<h2 className='login-title'>Login</h2>
						<input className='form-input' type="email" placeholder='Email' />
						<input className='form-input' type="password" placeholder='Password'/>
					<button className='login-form-btn' type="submit">Login</button>
				</form>
			</Modal>
		</div>
	);
};

export default AuthModal;

// const LoginForm = () => {
// 	const [values, setValues] = useState({
// 		email: "",
// 		password: "",
// 	});
//
// 	const [error, setError] = useState(undefined);
//
// 	const handleSubmit = async (event) => {
// 		event.preventDefault();
// 		try{
// 			const response = await axios.post ("/login", values);
// 			console.log(response.data);
// 		}catch (error){
// 			console.error(error);
// 			setError("An error occurred, try again...");
// 		}
// 	};
//
// 	return(
// 		<form onSubmit={handleSubmit}>
// 			<div className='field'>
// 				<label htmlFor="email"> Email</label>
// 				<input
// 					onChange={(e) => setValues({...values, email: e.target.value})}
// 					value={values.email}
// 					type="text"
// 					name="email"
// 				/>
// 			</div>
// 			<div className='field'>
// 				<label htmlFor="password">Password</label>
// 				<input
// 					onChange={(e) => setValues({...values, password: e.target.value})}
// 					value={values.password}
// 					type="password"
// 					name="password"
// 				/>
// 			</div>
//
// 			{error ? <p className="error"> {error}</p> : <></> }
// 			<button type="submit">Login</button>
// 		</form>
// 	);
// };
//
// export default LoginForm;
