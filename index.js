import React from 'react';

class App extends React.Component {
	state = {
		name: 'Tom'
	};

	componentDidMount() {
		this.setState({ name: 'Shalom' });
	}

	render() {
		return <div>Hello {this.state.name}!</div>;
	}
}

function TodoList() {
	const todos = [1, 'w345', 3, 4, 5];

	return (
		<ul>
			{todos.map(todoId => {
				return <TodoItem itemId={todoId} />;
			})}
		</ul>
	);
}

function TodoItem({ itemId }) {
	const [name, setName] = React.useState('Tom');

	let var1 = 'lala';
	React.useEffect(function() {
		// api call itemId
	});

	return <div>Hello {name}!</div>;
}
