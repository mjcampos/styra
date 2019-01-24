import React, { Component } from 'react';
import NodeList from './NodeList';
import Node from './Node';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      	<h1><Link to={`/`}>Styra</Link></h1>

      	<Route exact path="/" component={NodeList} />
      	<Route exact path="/node/:node_id" component={Node} />
      </div>
    );
  }
}

export default App;
