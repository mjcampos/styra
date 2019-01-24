import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {nodes} from '../scripts/script';

class NodeList extends Component {
	render() {
		var nodeArr = [];

		for(var node in nodes) {
			nodeArr.push(node);
		}

		return (
			<div>
				<ul>
					{nodeArr.map(node => (
						<li key={node}><Link to={`node/${node}`}>{node}</Link></li>
					))}
				</ul>
			</div>
		);
	}
}

export default NodeList;