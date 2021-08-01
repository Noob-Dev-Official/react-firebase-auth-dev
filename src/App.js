import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import './App.css';

function App() {
	return (
		<>
			<Router>
				<div className='auth-app'>
					<div className='content'>
						<Switch>
							<Route exact path='/sign-in'>
								<SignIn />
							</Route>
							<Route exact path='/sign-up'>
								<SignUp />
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		</>
	);
}

export default App;
