import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();

	const signup = (email, password) => {
		auth.createUserWithEmailAndPassword(email, password);
	};

	const value = {
		currentUser,
		signup,
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(() => user);
		});

		return unsubscribe;
	}, []);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
