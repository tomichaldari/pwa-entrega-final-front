import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button'
import CardProducto from './CardProducto';
import { Col, Row } from 'react-bootstrap';
// import { URL_API_BACKEND } from '../utils/consts';


const GrillaProductos = () => {

  const [productos, setProductos] = React.useState([])

  React.useEffect(() => {
    console.log('useEffect')
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const response = await fetch(process.env.REACT_APP_URL_API+`/api/producto/all`)

    const data = await response.json();

    console.log('Esta es la respuesta de la API de backend /n',data);

    setProductos(data)
    
  }


  return ( 

    
    <div class="container">
      <div class="row">
        <h2 class="h2-productos">PRODUCTOS</h2>


      </div>
      <Row xs={1} md={4} className="g-2">
        
          {
          productos.map(item => (
            <>
            <Col><CardProducto data={item}/></Col>
           </>
          ))
          }
      </Row>

    </div>  
    
      
    

  )
}

export default GrillaProductos