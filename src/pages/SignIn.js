import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';
import Alert from '../components/Alert';
import {
	AuthFormParent,
	AuthFormHeading,
	AuthForm,
	AuthFormLabel,
	AuthFormInput,
	AuthFormEmailDiv,
	AuthFormPasswordDiv,
	AuthFormSubmitBtn,
	AuthFormBottomText,
} from '../components/AuthFormComponents';

const SignIn = () => {
	const [email, setEmail] = useState({ email: '' });
	const [password, setPassword] = useState({ password: '' });
	const [error, setError] = useState(false);
	const [errorMssg, setErrorMssg] = useState('');
	const [loading, setLoading] = useState(false);

	const history = useHistory();

	const { signin } = useAuth();

	const onEmailChange = (e) => {
		setEmail(() => {
			return {
				[e.target.name]: e.target.value,
			};
		});
	};

	const onPasswordChange = (e) => {
		setPassword(() => {
			return {
				[e.target.name]: e.target.value,
			};
		});
	};

	const onFormSubmit = async (e) => {
		e.preventDefault();

		try {
			setError(false);
			setLoading(true);

			await signin(email.email, password.password);
			history.push('/');
		} catch (err) {
			setError(true);
			setErrorMssg('Cannot Sign In');
			console.log(err);
			hideErrorMssg();
		}

		setLoading(false);
	};

	const hideErrorMssg = () => {
		setTimeout(() => {
			setError(false);
			setErrorMssg('');
		}, 5000);
	};

	return (
		<>
			{error && <Alert mssg={errorMssg} />}
			<AuthFormParent>
				<AuthFormHeading>Sign In</AuthFormHeading>
				<AuthForm onSubmit={onFormSubmit}>
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
					<AuthFormPasswordDiv>
						<AuthFormLabel>Password</AuthFormLabel>
						<AuthFormInput
							type='password'
							name='password'
							value={password.password}
							onChange={onPasswordChange}
							required
						/>
					</AuthFormPasswordDiv>
					<AuthFormSubmitBtn
						disabled={loading}
						type='submit'
						name='submit'
						value='Sign In'
					/>
				</AuthForm>
				<p>
					Need an account?<Link to='/sign-up'> Sign Up</Link>
				</p>
			</AuthFormParent>
			<AuthFormBottomText>
				Forgot password?<Link to='/forgot-password'> Click Here</Link>
			</AuthFormBottomText>
		</>
	);
};

export default SignIn;
