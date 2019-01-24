import React, { Component } from 'react';
import {nodes} from '../scripts/script';

class NodeList extends Component {
	render() {
		var nodeArr = [];

		for(var node in nodes) {
			nodeArr.push(node);
		}

		console.log(nodes);

		return (
			<div>
				<ul>
					{nodeArr.map(node => <li key={node}>{node}</li>)}
				</ul>
			</div>
		);
	}
}

export default NodeList;