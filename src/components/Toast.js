import React, {useEffect} from 'react'
import '../css/toast.css'
import LogoVi from '../images/LogoVi/LogoVi-White.png'

const ToastMessage = ({info , time , describe }) =>{


  useEffect(() => {
  const toast = document.getElementById("mitoast");
  setTimeout(toast.className = toast.className.replace("cerrar", ""), 5000);
  
 
  },[]);

  return(
  
    <>
  
    <div role="alert" id="mitoast" aria-live="assertive" aria-atomic="true" className="mostrar">
 
      <div className="toast-header">
 
       
            <img src={LogoVi} width="20" height="20" className="rounded mr-2" alt="Logo VI" />
            
          
            <strong className="mr-auto">Publicaciones</strong>
            
          
            <small>Justo ahora</small>
            
     
    </div>

    <div className="toast-body">
    Por el momento no se encontraron publicaciones!
  </div>

</div>




</>

  )


     
}

export default ToastMessage;