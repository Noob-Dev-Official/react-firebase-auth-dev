import React, { useState } from 'react';

import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';

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

const ForgotPassword = () => {
	return (
		<>
			<h2>hello</h2>
		</>
	);
};

export default ForgotPassword;
