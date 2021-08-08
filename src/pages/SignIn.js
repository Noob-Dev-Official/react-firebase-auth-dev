import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Alert from '../components/Alert';

const Parent = styled.div`
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #1e1e1e;

	& p {
		margin-top: 15px;
	}

	& a {
		text-decoration: none;
		color: #006ee5;

		&:visited {
			color: #006ee5;
			text-decoration: none;
		}

		&:hover {
			text-decoration: underline;
			color: #006ee5;
		}
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

const SubmitBtn = styled(Input)`
	margin-top: 30px;

	&:hover {
		cursor: pointer;
		background-color: #d8d8d8;
	}
`;

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
		console.log('outside error');
		setLoading(false);
	};

	const hideErrorMssg = () => {
		setTimeout(() => {
			setError(false);
		}, 5000);
	};

	return (
		<>
			{error && <Alert mssg={errorMssg} />}
			<Parent>
				<Heading>Sign In</Heading>
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
					<SubmitBtn
						disabled={loading}
						type='submit'
						name='submit'
						value='Sign In'
					/>
				</Form>
				<p>
					Need an account?<Link to='/sign-up'>Sign Up</Link>
				</p>
				<p>
					Forgot password?<Link to='/forgot-password'>Click Here</Link>
				</p>
			</Parent>
		</>
	);
};

export default SignIn;
