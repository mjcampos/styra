import React, { Component } from 'react';
import {nodes} from '../scripts/script';

class Node extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nodeArr: []
		}
	}

	componentDidMount() {
		var {node_id} = this.props.match.params;
		var nodeObj = nodes[node_id];

		this.setState({
			nodeArr: this.convertObjToArr(nodeObj)
		})
	}

	convertObjToArr(nodeObj) {
		var nodeArr = [];

		for(var node in nodeObj) {
			nodeArr.push({
				node,
				edges: nodeObj[node]
			});
		}

		return nodeArr;
	}

	render() {
		var {node_id} = this.props.match.params;
		var {nodeArr} = this.state;

		return (
			<div>
				<h2>{node_id}</h2>

				{
					nodeArr.length ?
							<table>
								<thead>
									<tr>
										<th>Node</th>
										<th>Edges</th>
									</tr>
								</thead>

								<tbody>
									{nodeArr.map(node => {
										return (
											<tr key={node.node}>
												<td>{node.node}</td>
												<td>{node.edges}</td>
											</tr>
										)
									})}
								</tbody>
							</table>
						:
							<p>Node Object does not exist</p>
				}
			</div>
		);
	}
}

export default Node;