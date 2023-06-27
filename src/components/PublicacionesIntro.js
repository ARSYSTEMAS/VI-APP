import { async } from '@firebase/util';
import { db } from '../firebaseConfig';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import '../css/publicaciones.css';
import Post from './Post'


function PublicacionesIntroComponent(){

    const [post , setPost] = useState();

    const getPublicaciones = async () => {

        const querySnapshot = await getDocs(collection(db, "post")) ;
        const post = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))
        setPost(post);
    }





    useEffect(() => {


        getPublicaciones();
        
            
        }, []);


    return(

      <Post 
      publicacion ={post}
      />       
    );
}

export default PublicacionesIntroComponent;