import React, { Component } from 'react';
import {nodes} from '../scripts/script';
import {Table} from 'react-bootstrap';

class Node extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nodeArr: [],
			sortBy: null
		}
	}

	componentDidMount() {
		var {node_id} = this.props.match.params;
		var nodeObj = nodes[node_id];

		this.setState({
			nodeArr: this.convertObjToArr(nodeObj)
		});
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

	reverseNodeArr() {
		this.setState({
			...this.state,
			nodeArr: this.state.nodeArr.reverse()
		});
	}

	sortingByNode() {
		var {nodeArr, sortBy} = this.state;

		if (sortBy !== "node") {
			nodeArr.sort((a, b) => {
				if(a.node < b.node) return -1;
				if(a.node > b.node) return 1;

				return 0;
			});

			this.setState({
				...this.state,
				sortBy: "node",
				nodeArr
			});
		} else {
			this.reverseNodeArr();
		}
	}

	sortingByEdge() {
		var {nodeArr, sortBy} = this.state;

		if (sortBy !== "edges") {
			nodeArr.sort((a, b) => {
				if(a.edges < b.edges) return -1;
				if(a.edges > b.edges) return 1;

				return 0;
			});

			this.setState({
				...this.state,
				sortBy: "edges",
				nodeArr
			});
		} else {
			this.reverseNodeArr();
		}
	}

	render() {
		var {node_id} = this.props.match.params;
		var {nodeArr} = this.state;

		return (
			<div>
				<h2>{node_id}</h2>

				{
					nodeArr.length ?
							<Table>
								<thead>
									<tr>
										<th onClick={() => this.sortingByNode()}>Node</th>
										<th onClick={() => this.sortingByEdge()}>Edges</th>
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
							</Table>
						:
							<p>Node Object does not exist</p>
				}
			</div>
		);
	}
}

export default Node;