import React from 'react';
import './Styles.scss';
import NavBar from './components/Header/NavBar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Views/Home';
import Products from './Views/Products';
import Details from './components/Body/ItemDetailContainer';
import Contact from './Views/Contact';
import Footer from './components/Footer/Footer';
import Terror from './Views/CategoryTerror';
import Series from './Views/CategorySeries';
import Women from './Views/CategoryWomen';
import Men from './Views/CategoryMen';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Products} />
          <Route path="/details/:id" component={Details} />
          <Route path="/categories/Terror" exact component={Terror} />
          <Route path="/categories/Series" exact component={Series} />
          <Route path="/categories/women" exact component={Women} />
          <Route path="/categories/men" exact component={Men} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
