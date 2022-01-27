// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// const Login = () => {
//     // State para iniciar sesión
//     const [usuario, guardarUsuario] = useState({
//         email: '',
//         password: ''
//     })
//     // extraer email y password de usuario
//     const { email, password } = usuario;
//     const onChange = e => {
//         guardarUsuario({
//             ...usuario,
//             [e.target.name]: e.target.value,
//         })
//     }
//     //Iniciar Sesion click
//     const onSubmit = e => {
//         e.preventDefault();
//         // validar que no tengamos capos vacios
//         // pasarlos al action
//     }
//     return (
//         <div className="form-usuario">
//             <div className="contenedor-form sombra-dark">
//                 <h1>Iniciar sesión</h1>
//                 <form onSubmit={onSubmit}>
//                     <div className="campo-form">
//                         <label htmlFor="email">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Tu Email"
//                             onChange={onChange}
//                             value={email}
//                         />
//                     </div>
//                     <div className="campo-form">
//                         <label htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             placeholder="Tu Password"
//                             onChange={onChange}
//                             value={password}
//                         />
//                     </div>
//                     <div className="campo-form">
//                         <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesón" />
//                     </div>
//                 </form>
//                 <Link to="/Cuenta">
//                     Crear Cuenta
//                 </Link>
//             </div>
//         </div>
//     )
// }
// export default Login



//-----------------------------------LOGIN USADO---------------------------------
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="btn btn-primary btn-dark col-11" size="lg"  type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}






// import React, { Component } from 'react';
// // import '../css/Login.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import md5 from 'md5';
// import Cookies from 'universal-cookie';

// const baseUrl="http://localhost:4000/api/producto/all";
// const cookies = new Cookies();

// class Login extends Component {
//     state={
//         form:{
//             name: '',
//             password: ''
//         }
//     }

//     handleChange=async e=>{
//         await this.setState({
//             form:{
//                 ...this.state.form,
//                 [e.target.name]: e.target.value
//             }
//         });
//         console.log(this.state.form);
//     }

//     iniciarSesion=async()=>{
//         await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
//         .then(response=>{
//             return response.data;
//         })
//         .then(response=>{
//             if(response.length>0){
//                 var respuesta=response[0];
//                 cookies.set('id', respuesta.id, {path: "/"});
//                 cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
//                 cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
//                 cookies.set('nombre', respuesta.nombre, {path: "/"});
//                 cookies.set('username', respuesta.username, {path: "/"});
//                 alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
//                 window.location.href="./menu";
//             }else{
//                 alert('El usuario o la contraseña no son correctos');
//             }
//         })
//         .catch(error=>{
//             console.log(error);
//         })

//     }

//     componentDidMount() {
//         if(cookies.get('username')){
//             window.location.href="./menu";
//         }
//     }
    

//     render() {
//         return (
//     <div className="containerPrincipal">
//         <div className="containerSecundario">
//           <div className="form-group">
//             <label>Usuario: </label>
//             <br />
//             <input
//               type="text"
//               className="form-control"
//               name="username"
//               onChange={this.handleChange}
//             />
//             <br />
//             <label>Contraseña: </label>
//             <br />
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               onChange={this.handleChange}
//             />
//             <br />
//             <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
//           </div>
//         </div>
//       </div>
//         );
//     }
// }

// export default Login;





