import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './pages/ForgotPassword';
import UpdateProfile from './pages/UpdateProfile';

import './App.css';

function App() {
	return (
		<>
			<Router>
				<div className='auth-app'>
					<div className='content'>
						<AuthProvider>
							<Switch>
								<PrivateRoute exact path='/' component={Home} />
								<PrivateRoute
									exact
									path='/update-profile'
									component={UpdateProfile}
								/>
								<Route exact path='/sign-in'>
									<SignIn />
								</Route>
								<Route exact path='/sign-up'>
									<SignUp />
								</Route>
								<Route exact path='/forgot-password'>
									<ForgotPassword />
								</Route>
							</Switch>
						</AuthProvider>
					</div>
				</div>
			</Router>
		</>
	);
}

export default App;
