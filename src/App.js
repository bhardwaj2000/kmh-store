import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './containers/Header';
import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
        <Switch>
          <Route path="/" component={ProductListing} />
          <Route path="/product" component={ProductComponent} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route>404: Page not found !!!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
