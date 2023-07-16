import React, {useState} from 'react'
import '../css/post.css'
import Spinner from './Spinner'

const PostComponent = ( {publicacion, getPublicaciones } ) =>{

  const [comentar, setComentar] = useState(false);
  const [comentarios, setComentarios] = useState(false);
  const post = publicacion;

  function handleClickComentar(){ 
    
    comentar ? setComentar(false) : setComentar(true);
  
  }

  function handleClickComentarios(){
  
    comentarios ? setComentarios(false) : setComentarios(true);

  }

  const meGusta = (id) => {

    
   
  }

 

const publicate = (fecha) => {

  const fechaPost = new Date(fecha?.seconds * 1000 + fecha?.nanoseconds / 1000000);
  const fechaActual = new Date();
  const tiempoTranscurrido = fechaActual - fechaPost;
  
  const minutosTranscurridos = Math.floor(tiempoTranscurrido / (1000 * 60));
  const horasTranscurridas = Math.floor(tiempoTranscurrido / (1000 * 60 * 60));
  const diasTranscurridos = Math.floor(tiempoTranscurrido / (1000 * 60 * 60 * 24));

  let publicado='';

  
  if (diasTranscurridos <= 0){ //menos de 1 dia

      if(minutosTranscurridos <= 60){ //dentro de una hora
       
            if(minutosTranscurridos <= 0){

                publicado += `Hace segundos`;
                
            }else{

                publicado += `Hace ${minutosTranscurridos} min`;
            }

      }else{ // mas de 1 hora

            publicado += `Hace ${horasTranscurridas} hora`;

      }
  
  }else if (diasTranscurridos >= 1){ //mas de 1 dia

        if(diasTranscurridos === 1){

               publicado += `Ayer`;

        }else{


              publicado += `Hace ${diasTranscurridos} dias`;

        }

  }
        
  return publicado;
}
  

    return(


<section style={{backgroundColor: "#eee"}}>

{ post?.length > 0 ? (

post.map((posts, i) => (
 

<div className="container my-1 py-1" key={i}>
{ !post  && <Spinner /> }
  <div className="row justify-content-center">

  <div className="card" style={{ maxWidth: "42rem"}} >
  
    <div className="card-body ">
      
      <div className="d-flex mb-3">
        <a href="">
          <img src={posts.userImagePost} className="border rounded-circle me-2"
            alt="foto perfil" style={{height: "40px"}} />
        </a>
        <div>
          <a href="" className="text-dark mb-0">
            <strong> {posts.userNamePost}</strong> 
          </a>
          <a href="" className="text-muted d-block" style={{marginTop: "-6px"}}>
            <small>{publicate(posts.fechaPost)}</small>
          </a>
        </div>
      </div>
      
      <div>
        <p>
        {posts.post}
        </p>
      </div>
    </div>
    

    {!posts.imagePost && posts.statusimagePost ? <Spinner /> : ''}
    { posts.imagePost?
  
    <div  className="bg-image hover-overlay ripple rounded-0">
      <img src={posts.imagePost}  className="w-100"/>
      <a href="#!">
        <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
      </a>
    </div>
    
    
      : '' }
  
    <div className="card-body">
      
      <div className="d-flex justify-content-between mb-3">
        <div>
          <a href="">
          <i className="bi bi-hand-thumbs-up"></i>
          <i className="bi bi-heart "></i>
            <span className='m-1'>{posts.meGusta}</span>
          </a>
        </div>
        <div>
          <a  style={{cursor:"pointer"}} className="text-muted" onClick={handleClickComentarios}> {posts.nroComentarios} comentarios </a>
        </div>
      </div>
      

      
      <div className="d-flex justify-content-between text-center border-top border-bottom mb-4">
        <p style={{cursor:"pointer"}} onClick= {meGusta(post.id)}> <i className="bi bi-hand-thumbs-up"></i> Me Gusta </p>
        <p  onClick={handleClickComentar} style={{cursor:"pointer"}}> <i className="bi bi-chat-square"></i> Comentar</p>
        <p style={{cursor:"pointer"}}><i className="bi bi-share"></i> Compartir </p>
      </div>
   
      { comentar ? 
      <div className="d-flex mb-3">
        <a href="">
          <img src={posts.userImagePost} className="border rounded-circle me-2"
            alt="Foto de Perfil" style={{height: "40px"}} />
        </a>
        <div className="form-outline w-100">
          <textarea className="form-control" id="textAreaExample" rows="2"></textarea>
          <label className="form-label" for="textAreaExample">Escribe tu Comentario</label>
        </div>
      </div>
       : '' }

  { comentarios ? 
      <div className="d-flex mb-3">
        <a href="">
          <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="border rounded-circle me-2"
            alt="Avatar" style={{height: "40px" }}/>
        </a>
        <div>
          <div className="bg-light rounded-3 px-3 py-1">
            <a href="" className="text-dark mb-0">
              <strong>Malcolm Dosh</strong>
            </a>
            <a href="" className="text-muted d-block">
              <small>Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Natus, aspernatur!</small>
            </a>
          </div>
          <a href="" className="text-muted small ms-3 me-2"><strong>Like</strong></a>
          <a href="" className="text-muted small me-2"><strong>Reply</strong></a>
        </div>
      </div>
 : '' }
      
    </div>  
    </div>
    </div>
   
  </div>
 
  
 
    ))
    ) : (


      <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">¡Lo sentimos!</h4>
      <p>Oh, en estos momentos no hay publicaciones</p>
      <hr/>
      <p className="mb-0">Animate, y se el primero en publicar!</p>
    </div>


    )}
        
</section>

    );
}

export default PostComponent;