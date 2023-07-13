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
	<button className='Log-in-btn' onClick={openModal}>Sign up</button>
	<Modal className='modal' isOpen={isOpen} onRequestClose={closeModal}>
		<div className='login-form'>
			<h2 className='login-title'>Create Account</h2>
			<div className='form-item'>
				<label>
					Email
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
				</label>
		<p className={'error-message'}>{errors.email && errors.email.message}</p>
	</div>
			<div className='form-item' >
				<label>
					Password
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
				</label>
		<p className={'error-message'}>{errors.password && errors.password.message}</p>
	</div>
			<div className='checkbox'>
				<input type={"checkbox"} id='ch1'/>
				<label className='checkbox-label' for={"ch1"}>By Signing Up I agree with Term & Conditions</label>
			</div>
			<div className='buttons'>
			<button className='login-form-btn'  type="submit">Sign up</button>
			<button className='login-form-btn'  type="submit">Sign in</button>
			</div>
		</div>
	</Modal>
</form>
	);
};
export default AuthModal;

