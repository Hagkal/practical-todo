import AddListModal from '../components/AddListModal';
import { Button } from 'react-bootstrap';
import React from 'react';

function Home() {
	const [show, setShow] = React.useState(false);

	function toggleModal() {
		setShow(!show);
	}

	return (
		<>
			<div id='app'>
				<Button onClick={toggleModal}>Add Todo List</Button>
			</div>

			<AddListModal show={show} toggle={toggleModal}></AddListModal>
		</>
	);
}

export default Home;
