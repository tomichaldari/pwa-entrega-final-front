import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
import Inicio from '../src/components/Inicio';
import Comprar from './components/Comprar';
import Contacto from './components/Contacto';
import Nosotros from './components/Nosotros';
import GrillaProductos from './components/GrillaProductos';
import Header from './components/Encabezado';
import Footer from './components/Footer';







function App() {
  return (
     
    <Router>
      <Header />
      <div className="container">
        <div className="navbar-brote">
          <Link to="/" className="btn btn-dark col-3" activeClassName="active">
            <h5> Inicio</h5>          
          </Link>    
          <Link to="/Nosotros" className="btn btn-dark col-3 border"  activeClassName="active">
          <h5>Nosotros</h5>          
          </Link>   
          <Link to="/Productos" className="btn btn-dark col-3 border" activeClassName="active">
            <h5>Productos</h5>          
          </Link>   
          <Link to="/Comprar" className="btn btn-dark col-3 border" activeClassName="active">
            <h5>Comprar</h5>          
          </Link>
        </div>
        <hr />
        
        <Switch>
          <Route path="/" exact>
            <Inicio />            
          </Route>
          <Route path="/Nosotros">
            <Nosotros />
          </Route>
          <Route path="/Productos">
            <GrillaProductos />
            
          </Route>
          <Route path="/Comprar">
            <Comprar />
          </Route>
          <Route path="/Contacto">
            <Contacto />
          </Route>
       
        </Switch>
        <Footer />
        
      </div>  
      
      
       
    </Router>
    
    
   


    
  );
}

export default App;
