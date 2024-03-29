import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
// import ProductList from './components/ProductList/ProductList'
import routes from './routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  showContentMenus = (routes) => {
    let result = null

    if (routes.length > 0) {

      result = routes.map((route, index) => {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      })
    }
    return <Switch> {result} </Switch>
  }


  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">
            <div className="row">
        

              {this.showContentMenus(routes)}
            </div>
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
