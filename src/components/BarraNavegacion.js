import React, {useState,useEffect, useRef} from 'react';
import {auth,provider} from "../firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import ModalAddPost from './ModalAddPost';
import Swal from 'sweetalert2';


function BarraNavegacionComponent(){

  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [name, setName] = useState('');
  const [post, setPost] = useState(null);

 

  const [openClose, setOpenClose] = useState(false);
  const handleOpenModal = () => setOpenClose(true);
  const handleCloseModal = () => setOpenClose(false);

  const postRef = useRef();


  const handleGoogleLogin=()=>{
  
    signInWithPopup(auth, provider).then((result)=>{

      setEmail(result.user.email);
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
     
      //Almacenando datos en Localstorage
      localStorage.setItem("user-vi-app", result.user.displayName);
      localStorage.setItem("e-vi-app", result.user.email);
      localStorage.setItem("ph-vi-app",result.user.photoURL);
      
      // Accede a la foto de perfil del usuario
      const photoURL = result.user.photoURL;
      setProfilePicture(photoURL);

      Swal.fire({
        icon: 'success',
        title: 'Entrando a VI',
        text: 'Sesión iniciada correctamente',
        showConfirmButton: false,
        timer: 2000,
      });

      

    }).catch((err)=>{
      console.log(err);
    })

  }


    useEffect(()=>{
    
    const email =localStorage.getItem('e-vi-app');   
    const name =localStorage.getItem('user-vi-app');
    const photoUrl = localStorage.getItem('ph-vi-app');
    setEmail(email); 
    setName(name);
    setProfilePicture(photoUrl);      

    }, [])


  
    const Logout=()=>{

    localStorage.clear();
    window.location.reload();
    
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

                    
                      { email?
                        <li className="nav-item">

                        <a className="nav-link" href="#"  onClick={handleOpenModal}>Publicar</a>
                        
                        </li>
                   
                        : '' }


                        <div className="ms-4">
                        
                            {email?(
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
                              <a className="dropdown-item" href="#">Mi Perfil</a>
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
                                   
                <ModalAddPost 
                openClose = {openClose}
                onClose = {handleCloseModal}
                userEmail = {email}
                name = {name}
                />
            </div>       
        </nav>
                 
    
            
    );
}

export default  BarraNavegacionComponent;