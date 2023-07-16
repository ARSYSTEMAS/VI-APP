import { async } from '@firebase/util'
import { db } from '../firebaseConfig'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import '../css/publicaciones.css'
import Post from './Post'


function PublicacionesIntroComponent( {IsAddPost , setIsAddPost} ){

    const [post , setPost] = useState();
    
    const getPublicaciones = async () => {

        const querySnapshot = await getDocs(collection(db, "post")) ;
        const post = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))
        
        // Ordenar por fechaPost de manera descendente
        const postCopy = post.sort((a, b) => b.fechaPost.seconds - a.fechaPost.seconds);

        setPost(postCopy);
    }


    useEffect(() => {


        getPublicaciones();
        setIsAddPost(false);
           
            
    }, [IsAddPost]);
        
        
    return(
      
      <Post 
      publicacion ={post}
      getPublicaciones = {getPublicaciones}
      />
      
     
    );
}

export default PublicacionesIntroComponent;