import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';
import {
	AuthFormParent,
	AuthFormHeading,
	AuthForm,
	AuthFormLabel,
	AuthFormInput,
	AuthFormEmailDiv,
	AuthFormSubmitBtn,
	AuthFormBottomText,
} from '../components/AuthFormComponents';

const ForgotPassword = () => {
	const [email, setEmail] = useState({ email: '' });
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorMssg, setErrorMssg] = useState('');

	const onEmailChange = (e) => {
		setEmail(() => {
			return {
				[e.target.name]: e.target.value,
			};
		});
	};

	return (
		<>
			<AuthFormParent>
				<AuthFormHeading>Reset Password</AuthFormHeading>
				<AuthForm>
					<AuthFormEmailDiv>
						<AuthFormLabel>Email</AuthFormLabel>
						<AuthFormInput
							type='text'
							name='email'
							value={email.email}
							onChange={onEmailChange}
							required
						/>
					</AuthFormEmailDiv>
					<AuthFormSubmitBtn
						disabled={loading}
						type='submit'
						name='submit'
						value='Reset Password'
					/>
					<p className='forgot-password-sign-in'>
						<Link to='/sign-in'>Sign In</Link>
					</p>
				</AuthForm>
			</AuthFormParent>
			<AuthFormBottomText>
				Need an account?<Link to='/sign-up'> Sign Up</Link>
			</AuthFormBottomText>
		</>
	);
};

export default ForgotPassword;
