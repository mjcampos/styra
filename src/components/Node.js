import React, { Component } from 'react';
import {nodes} from '../scripts/script';

class Node extends Component {
	convertObjToArr(nodeObj) {
		var arr = [];

		for(var node in nodeObj) {
			arr.push([node, nodeObj[node]]);
		}

		return arr;
	}

	render() {
		var {node_id} = this.props.match.params
		var nodeObj = nodes[node_id];

		var nodeArr = this.convertObjToArr(nodeObj);

		return (
			<div>
				<h2>{node_id}</h2>

				{
					nodeArr.length ?
							<p>Something's here</p>
						:
							<p>Node Object does not exist</p>
				}
			</div>
		);
	}
}

export default Node;