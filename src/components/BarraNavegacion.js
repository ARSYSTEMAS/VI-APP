import React, {useState,useEffect} from 'react';
import {auth,provider} from "../firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader,FormGroup, Input, Label,Col,FormText } from 'reactstrap';

function BarraNavegacionComponent(){

  const [user, setUser] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [name, setName] = useState('');
  const [abrir, setabrir] = useState(false);

  const handleGoogleLogin=()=>{
  
    signInWithPopup(auth, provider).then((result)=>{

      setUser(result.user);
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
     
      //Almacenando datos en Localstorage
      localStorage.setItem("user-vi-app", JSON.stringify(result.user));
      localStorage.setItem("e-vi-app", result.user.email);
      localStorage.setItem("ph-vi-app",result.user.photoURL);
      
      // Accede a la foto de perfil del usuario
      const photoURL = result.user.photoURL;
      setProfilePicture(photoURL);

    }).catch((err)=>{
      console.log(err);
    })

  }


    useEffect(()=>{

    const user =JSON.parse(localStorage.getItem('user-vi-app'));  
    const name =user?.displayName;
    const photoUrl = localStorage.getItem('ph-vi-app');
    setUser(user); 
        setName(name);
        setProfilePicture(photoUrl);
        
            
    }, [])


    const Logout=()=>{

    localStorage.clear();
    window.location.reload();
    }

    const abrirModal= () =>{

      setabrir(true); 

  }

    return(
     
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand me-lg-5 me-0" href="index.html">
                    <img src={require("../images/LogoVi/LogoVi-White.png")}  className="rounded-circle" alt="Logo VI" height="50"
                    />
                </a>

                <form action="#" method="get" className="custom-form search-form flex-fill me-3" role="search">
                    <div className="input-group input-group-lg">
                        <input name="search" type="search" className="form-control" id="search" placeholder="Buscar en VI"
                            aria-label="Search"
                        />

                        <button type="submit" className="form-control" id="submit">
                            <i className="bi-search"></i>
                        </button>
                    </div>
                </form>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav ms-lg-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="index.html">Inicio</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="about.html">Noticias</a>
                        </li>

                    
                      { user?
                        <li className="nav-item">

                        <a className="nav-link" href="#" onClick={abrirModal}>Postear</a>
                        
                        </li>
                   
                        : '' }


                        <div className="ms-4">
                        
                            {user?(
                                <>
                                
                                <div className="dropdown">
                          <a
                            className="dropdown-toggle d-flex align-items-center hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuAvatar"
                            role="button"
                            data-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img
                              src={profilePicture}
                              className="rounded-circle"
                              height="50"
                              alt="Foto Perfil"
                              loading="lazy"
                            />
                          </a>
                          <ul
                            className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"
                            aria-labelledby="navbarDropdownMenuAvatar"
                          >
                            <li>
                              <a className="dropdown-item" href="#">{name}</a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="#"  onClick={Logout}>Salir</a>
                            </li>
                          </ul>
                        </div>
                                   
                                </>
                                ):(
                                
                             
                              
                              <a href="#" 
                              onClick={handleGoogleLogin}
                              className="btn custom-btn custom-border-btn smoothscroll">Entrar</a>
                             
                            
                            )} 
                    </div>
                    </ul>
                    
                </div>
               
                <Modal isOpen= {abrir}>

                <ModalHeader>
                    Que estas pensando?
                </ModalHeader>


                <ModalBody>

                    Este el cuerpo
                </ModalBody>

                <FormGroup>
              
                <Input
                    id="txtPost"
                    name="txtPost"
                    type="textarea"
                />
              

                </FormGroup>


                <FormGroup row>
                <Label
                for="exampleFile"
                sm={2}
                >
                File
                </Label>
              
                <Input
                    id="exampleFile"
                    name="file"
                    type="file"
                />
                <FormText>
                    This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
                </FormText>
               
                </FormGroup>


                <ModalFooter>

                      Este es el pie
                    
                </ModalFooter>



                </Modal>

            </div>
        
        </nav>
                 
    

    );
}

export default  BarraNavegacionComponent;