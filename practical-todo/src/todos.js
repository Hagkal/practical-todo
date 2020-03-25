import React, { createContext, useContext, useState } from 'react';

const TodosContext = createContext();

const initialState = {
	lists: {},
	todos: {}
};

export function TodosProvider({ children }) {
	const [state, setState] = useState(initialState);

	function addTodoList(title: String) {
		if (!title) {
			throw new Error('title is required');
		}
		const todoList = {
			title,
			id: (Math.random() * 10).toString()
		};
		setState({ ...state, lists: { ...state.lists, [todoList.id]: todoList } });
	}

	React.useEffect(() => {
		const rstate = localStorage.getItem('@@todosState');
		if (rstate) {
			setState(JSON.parse(rstate));
		}
	}, []);
	React.useEffect(() => {
		localStorage.setItem('@@todosState', JSON.stringify(state));
	}, [state]);
	return (
		<TodosContext.Provider
			value={{ todos: state.todos, lists: state.lists, addTodoList }}
		>
			{children}
		</TodosContext.Provider>
	);
}

export function useTodos() {
	return useContext(TodosContext);
}
