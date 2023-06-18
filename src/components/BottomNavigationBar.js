import React, { useState, useEffect } from "react";
import '../css/bottomNavigationBar2.css'

function BottomNavigationBar() {
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (

    <nav className={`navbarInferior ${visible ? "visible" : "hidden"}`}>
   
          <div className="house"><i className="bi bi-house-door" onClick={()=>{window.scrollTo({
            top:0,
            behavior:'smooth'
          });}}></i><span>Inicio</span></div>
      
          <div className="news"><i className="bi bi-newspaper"></i> <span>Noticias</span></div>

          <div>    <img src={require("../images/LogoVi/LogoVi-White.png")}  className="rounded-circle" alt="Logo VI" height="50"
                    />
            
          </div>

          <div className="search"><i className="bi bi-search"></i><span>Buscar</span></div>

          <div className="Twitter"><i className="bi bi-twitter" onClick={()=>{window.open("https://twitter.com/VALENCIAINFORMA","_blank");}}></i><span>Twitter</span></div>
              
    </nav>
  );
}

export default BottomNavigationBar;

