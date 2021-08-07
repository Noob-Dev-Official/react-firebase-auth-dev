import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { AuthProvider } from './contexts/AuthContext';

import './App.css';

function App() {
	return (
		<>
			<Router>
				<div className='auth-app'>
					<div className='content'>
						<AuthProvider>
							<Switch>
								<Route exact path='/sign-in'>
									<SignIn />
								</Route>
								<Route exact path='/sign-up'>
									<SignUp />
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
