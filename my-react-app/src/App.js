import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Browser as Router, Route, Switch} from 'react-router-dom';
// import {Home} from './Home';
// import {Portfolio} from './Portfolio';
// import {NoMatch} from './NoMatch';


class App extends Component {
  render() {
    return (
      <h1>App</h1>
      // <React.Fragment>
      //   <Router>
      //     <Switch>
      //       <Route exact path="/" component={Home} />
      //       {/* <Route path="/about" component={Resume} /> */}
      //       <Route path="/contact" component={Portfolio} />
      //       <Route component={NoMatch} />
      //     </Switch>
      //   </Router>
      // </React.Fragment>
    );
  }
}

export default App;
