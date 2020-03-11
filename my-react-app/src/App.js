import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Browser as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {Resume} from './Resume';
import {Portfolio} from './Portfolio';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
// import { NavigationBar } from './components/NavigationBar';
// import {Jumbotron} from './components/Jumbotron';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={Resume} />
              <Route path="/contact" component={Portfolio} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
