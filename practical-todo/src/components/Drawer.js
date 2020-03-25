import { ListGroup, ListGroupItem } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import React from 'react';
import { useTodos } from '../todos';

function Drawer() {
	const { lists } = useTodos();
	const listsAsArr = Object.values(lists);
	return (
		<div id='drawer'>
			<ListGroup>
				{listsAsArr.map(item => {
					return (
						<Link to={'/list/' + item.id} key={item.id}>
							<ListGroupItem>{item.title}</ListGroupItem>
						</Link>
					);
				})}

				<ListGroupItem>Config</ListGroupItem>

				<ListGroupItem>About</ListGroupItem>
			</ListGroup>
		</div>
	);
}

export default Drawer;
