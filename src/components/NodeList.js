import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {nodes} from '../scripts/script';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class NodeList extends Component {
	render() {
		var nodeArr = [];

		for(var node in nodes) {
			nodeArr.push(node);
		}

		return (
			<div>
				<ListGroup>
					{nodeArr.map(node => (
						<ListGroupItem key={node}><Link to={`node/${node}`}>{node}</Link></ListGroupItem>
					))}
				</ListGroup>
			</div>
		);
	}
}

export default NodeList;