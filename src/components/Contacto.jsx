import React from 'react';
import Form from 'react-bootstrap/Form';

const Contacto = () => {
  return ( 
    <div class="container">
        <div class="row">
            <div class="col">
                <h2 class="">CONTACTO</h2>
                <div class="formulario d-flex">

                    <Form class="col-sm-6 text-center" action="contact" id="contact-form" method="post" role="form">
                          <div class="form-group">
                            <label for="name" class="badge">Nombre</label>
                            <input type="text" name="name" class="form-control" id="name" placeholder="nombre" required></input>
                          </div>
                          <div class="form-group">
                              <label for="telephone" class="badge">Telefono</label>
                              <input type="tel" name="telephone" class="form-control" id="telephone" placeholder="telefono"></input>
                            </div>
                          <div class="form-group">
                              <label for="email" class="badge">Email</label>
                              <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="email" required></input>
                            </div>
                          <div class="form-group">
                          <label for="message" class="badge">Mensaje</label>
                          <textarea class="form-control" name="message" id="message" rows="3" required></textarea>
                          </div>
                          <button type="button" class="btn btn-dark btn1 fs-3 btn-block col-11">Enviar</button>
                        </Form>

                </div>




            </div>

        </div>

    </div>



  )
}

export default Contacto


