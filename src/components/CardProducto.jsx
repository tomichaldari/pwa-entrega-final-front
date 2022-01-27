import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const CardProducto = ({data: { name, description, img, link}}) => {


  return (
    <Card className="h-100 w-100">
    <Card.Img variant="top" src={img} className="hv-100" />
    <Card.Body className="column-reverse">
      {/* <Card.Body> */}

      <Card.Title>{name}</Card.Title>
      
      <Card.Text className="">
        {description}
      </Card.Text>
      <div>
        <Button variant="dark" href={link} target="_blank" class="btn-lg btn btn-dark" >VER</Button>
      </div>  
    </Card.Body>
    </Card>



  
  );
};

export default CardProducto;
