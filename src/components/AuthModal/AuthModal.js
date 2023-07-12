import React, {useState } from 'react';
import Modal from 'react-modal';
import {useForm} from "react-hook-form";
import '../AuthModal/AuthModal.scss';

const AuthModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};
	const { handleSubmit, register, formState: { errors} } = useForm();
	return (
<form onSubmit={handleSubmit(onsubmit)}>
	<button className='Log-in-btn' onClick={openModal}>Log in</button>
	<Modal className='modal' isOpen={isOpen} onRequestClose={closeModal}>
		<div className='login-form'>
			<h2 className='login-title'>Login</h2>
			<div className='form-item'>
		<input className='form-input'  placeholder='Email'
		       type="email"
		       {...register("email",{
			       required:"required",
			       pattern:{
				       value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				       message: "invalid email address"
			       }
		       })}
		/>
		<p className={'error-message'}>{errors.email && errors.email.message}</p>
	</div>
			<div className='form-item' >
		<input className='form-input'  placeholder='Password'
			// className={errors.password ? 'error' : ''}
			type="password"
			{...register("password", {
				required: "required",
				pattern: {
					value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
					message: "Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol."
				}
			})}
		/>
		<p className={'error-message'}>{errors.password && errors.password.message}</p>
	</div>
			<button className='login-form-btn'  type="submit">Submit</button>
		</div>
	</Modal>
</form>
	);
};
export default AuthModal;

