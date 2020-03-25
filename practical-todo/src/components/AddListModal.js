import { Button, Modal } from 'react-bootstrap';

import React from 'react';
import { useTodos } from '../todos';

function AddListModal({ show, toggle }) {
	const [title, setTitle] = React.useState('');
	const { addTodoList } = useTodos();

	function handleChange(e) {
		setTitle(e.target.value);
	}

	function handleToggle() {
		setTitle('');
		toggle();
	}

	function handleClick() {
		addTodoList(title);
		setTitle('');
		toggle();
	}

	return (
		<>
			<Modal
				show={show}
				onHide={toggle}
				size='sm'
				aria-labelledby='contained-modal-title-vcenter'
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>Add a New List</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input
						type='text'
						placeholder='Enter List Name'
						value={title}
						onChange={handleChange}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleToggle}>
						Close
					</Button>
					<Button variant='primary' onClick={handleClick}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default AddListModal;
