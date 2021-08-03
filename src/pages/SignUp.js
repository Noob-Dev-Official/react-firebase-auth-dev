import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Alert from '../components/Alert';
import Success from '../components/Success';

const Parent = styled.div`
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& p {
		margin-top: 15px;
	}
`;

const Heading = styled.h1`
	display: block;
	padding: 0px auto;
`;

const Form = styled.form`
	padding: 50px 20px;
	border: 1px solid #999999;
	margin-top: 40px;
	border-radius: 10px;
	max-width: 400px;
	margin: 20px;
`;

const Label = styled.label`
	font-size: 1.1rem;
`;

const Input = styled.input`
	display: block;
	padding: 8px 5px;
	width: 300px;
	font-size: 1rem;
	border-radius: 5px;
	border: 1px solid #999999;
	margin-top: 8px;
`;

const EmailDiv = styled.div``;

const PasswordDiv = styled.div`
	margin-top: 20px;
`;

const ConfirmPasswordDiv = styled.div`
	margin-top: 20px;
`;

const SubmitBtn = styled(Input)`
	margin-top: 30px;

	&:hover {
		cursor: pointer;
		background-color: #d8d8d8;
	}
`;

const SignUp = () => {
	const [email, setEmail] = useState({ email: '' });
	const [password, setPassword] = useState({ password: '' });
	const [error, setError] = useState(false);
	const [errorMssg, setErrorMssg] = useState('');
	const [success, setSuccess] = useState(false);
	const [successMssg, setSuccessMssg] = useState('');
	const [loading, setLoading] = useState(false);

	const { signup } = useAuth();

	const confirmPasswordRef = useRef();

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

		if (confirmPasswordRef.current.value !== password.password) {
			setError(true);
			setErrorMssg('Passwords do not match!');
			console.log(password);
			console.log(confirmPasswordRef.current.value);
			hideErrorMssg();
			return 'incorrect password';
		} else {
			try {
				setLoading(true);
				await signup(email.email, password.password);
				setSuccessMssg(true);
				setSuccessMssg('Sign Up successful!');
			} catch (err) {
				setErrorMssg(err);
				console.log(err);
				hideErrorMssg();
			}
		}

		setLoading(false);
	};

	const hideErrorMssg = () => {
		setTimeout(() => {
			setError(false);
		}, 5000);
	};

	const hideSuccessMssg = () => {
		setTimeout(() => {
			setSuccess(false);
		}, 5000);
	};

	return (
		<>
			{error && <Alert mssg={errorMssg} />}
			{success && <Success mssg={successMssg} />}
			<Parent>
				<Heading>Sign Up</Heading>
				<Form onSubmit={onFormSubmit}>
					<EmailDiv>
						<Label>Email</Label>
						<Input
							type='text'
							name='email'
							value={email.email}
							onChange={onEmailChange}
							required
						/>
					</EmailDiv>
					<PasswordDiv>
						<Label>Password</Label>
						<Input
							type='password'
							name='password'
							value={password.password}
							onChange={onPasswordChange}
							required
						/>
					</PasswordDiv>
					<ConfirmPasswordDiv>
						<Label>Confirm Password</Label>
						<Input
							ref={confirmPasswordRef}
							type='password'
							name='password'
							required
						/>
					</ConfirmPasswordDiv>
					<SubmitBtn
						disabled={loading}
						type='submit'
						name='submit'
						value='Enter'
					/>
				</Form>
				<p>
					Already have an account?<Link to='/sign-in'>Sign In</Link>
				</p>
			</Parent>
		</>
	);
};

export default SignUp;
