import { Col, Row } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Drawer from './components/Drawer';
import Home from './pages/Home';
import React from 'react';
import TodoList from './pages/TodoList';
import { TodosProvider } from './todos';

function App() {
	return (
		<TodosProvider>
			<Router>
				<Row>
					<Col xs={4}>
						<Drawer />
					</Col>
					<Col>
						<Switch>
							<Route path='/' exact>
								<Home />
							</Route>
							<Route path='/list/:id'>
								<TodoList />
							</Route>
						</Switch>
					</Col>
				</Row>
			</Router>
		</TodosProvider>
	);
}

export default App;
