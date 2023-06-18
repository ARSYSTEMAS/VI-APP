import { async } from '@firebase/util';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import '../css/publicaciones.css';


function PublicacionesComponent(){

    const [post , setPost] = useState();

    const getPublicaciones = async () => {

        const querySnapshot = await getDocs(collection(db, "post")) ;
        const post = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))
        setPost(post);
    }


    useEffect(() => {

        getPublicaciones()
            
        }, []);


    return(

      
        <section className="latest-podcast-section section-padding pb-0" id="section_2">
        
            <div className="container">
           
                <div className="row justify-content-center">

                    <div className="col-lg-10 col-12">
                    
                   {post ? (
                        post.map((posts, i) => (


                        <div className="row post">
                          
                          { posts.imagePost?
                            <div className="col-lg-3 col-12">
                                <div className="custom-block-icon-wrap">
                                
                                    <div className="custom-block-image-wrap custom-block-image-detail-page">
                                        <img src={posts.imagePost}
                                            className="custom-block-image img-fluid" alt=""
                                        />
                                    </div>
                                      
                                </div>
                             
                            </div>
                            : '' }
                            

                            
                            <div className="col-lg-9 col-12">
                                <div className="custom-block-info">
                                    <div className="custom-block-top d-flex mb-1">
                                            <img src={posts.userImagePost}
                                                        className="profile-block-image img-fluid" alt=""
                                                    />
                                            <p>
                                            {posts.userNamePost}
                                                <img src={require("../images/verified.png")} className="verified-image img-fluid" alt=""
                                                />
                                               
                                            </p>

                                

                                        <small className="ms-auto">Hace <span className="badge">15min</span></small>
                                    </div>

                                

                                    <p>{posts.post}</p>

                                    

                                    
                                    
                                    <div className="custom-block-bottom d-flex justify-content-between mt-3">
                                        
                                    <a href="#" className="bi-headphones me-1">
                                        <span>0k</span>
                                    </a>

                                    <a href="#" className="bi-heart me-1">
                                        <span>0k</span>
                                    </a>

                                    <a href="#" className="bi-chat me-1">
                                        <span>0k</span>
                                    </a>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>

                           ))
                      ) : (
                                     
                        <div className="col-lg-9 col-12">
                            <div className="custom-block-info">
                                    <p>No hay Post Actualmente</p>
                            </div>
                        </div>
                      
                      )}

                    </div>

                </div>
            </div>
                 
        </section>
       
    );
}

export default PublicacionesComponent;