import React, { useState, useEffect } from "react";
import '../css/bottomNavigationBar2.css'
import ModalAddPost from './ModalAddPost';
import Swal from 'sweetalert2'

function BottomNavigationBar() {

  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [name, setName] = useState('');

  const [openClose, setOpenClose] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  
  

  

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  };


    useEffect(()=>{

      const name =localStorage.getItem('user-vi-app');
      const email =localStorage.getItem('e-vi-app');
      const photoUrl = localStorage.getItem('ph-vi-app');

      setName(name);
      setEmail(email); 
      setProfilePicture(photoUrl);
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  const errorLogon = () => {

    return Swal.fire({
      icon: 'info',
      title: 'Información!',
      text: 'Para publicar, es necesario iniciar Sesión',
      showConfirmButton: true,
    });
  }
  const handleOpenModal = () => email ? setOpenClose(true) : errorLogon();
  const handleCloseModal = () => setOpenClose(false);

  return (
    <div>
    <nav className={`navbarInferior ${visible ? "visible" : "hidden"}`}>
   
          <div className="house"><i className="bi bi-house-door" onClick={()=>{window.scrollTo({
            top:0,
            behavior:'smooth'
          });}}></i><span>Inicio</span></div>
      
          <div className="news"><i className="bi bi-newspaper"></i> <span>Noticias</span></div>

          <div >    <img src={require("../images/LogoVi/LogoVi-White.png")} style={{cursor:"pointer"}} onClick={handleOpenModal} className="rounded-circle" alt="Logo VI" height="50"
                    />
            
          </div>

          <div className="search"><i className="bi bi-search"></i><span>Buscar</span></div>

          <div className="Twitter"><i className="bi bi-twitter" onClick={()=>{window.open("https://twitter.com/VALENCIAINFORMA","_blank");}}></i><span>Twitter</span></div>
              
    </nav>

    <div>
        <ModalAddPost 
        openClose = {openClose}
        onClose = {handleCloseModal}
        userEmail = {email}
        name = {name}
        profilePicture = {profilePicture}
        />
    </div>
    </div>
  );
}

export default BottomNavigationBar;

