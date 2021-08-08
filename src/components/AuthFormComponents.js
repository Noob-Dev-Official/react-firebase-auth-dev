import styled from 'styled-components';

export const AuthFormParent = styled.div`
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

export const AuthFormHeading = styled.h1`
	display: block;
	padding: 0px auto;
`;

export const AuthForm = styled.form`
	padding: 50px 20px;
	border: 1px solid #999999;
	margin-top: 40px;
	border-radius: 10px;
	max-width: 400px;
	margin: 20px;
`;

export const AuthFormLabel = styled.label`
	font-size: 1.1rem;
`;

export const AuthFormInput = styled.input`
	display: block;
	padding: 8px 5px;
	width: 300px;
	font-size: 1rem;
	border-radius: 5px;
	border: 1px solid #999999;
	margin-top: 8px;
`;

export const AuthFormEmailDiv = styled.div``;

export const AuthFormPasswordDiv = styled.div`
	margin-top: 20px;
`;

export const AuthFormSubmitBtn = styled(AuthFormInput)`
	margin-top: 30px;

	&:hover {
		cursor: pointer;
		background-color: #d8d8d8;
	}
`;
