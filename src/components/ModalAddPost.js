import React, {useState,useEffect, useRef} from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader,FormGroup, Input } from 'reactstrap'
import { db } from '../firebaseConfig'
import { serverTimestamp } from 'firebase/firestore'
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"
import Swal from 'sweetalert2'
import ImageUploadPost from './ImageUploadPost'
import { getStorage, ref, uploadBytesResumable,  getDownloadURL } from "firebase/storage"
import Spinner from './Spinner'


const ModalAddPost = ( { openClose, onClose , userEmail , name, profilePicture}) => {
    
    const [post, setPost] = useState(null);
    const postRef = useRef();
    const [childValueFile, setchildValueFile ] = useState([]);
    const [progres, setProgres] = useState(0);
    const [textprogress, setTextProgress] = useState('');
    const [isClickPostear, setIsClickPostear] = useState(false);

    if(!openClose) return null;

    const handleChildValueFile = (selectedFile) => { setchildValueFile(selectedFile)};

   
   

    const handleAddPost = async () => {

      setIsClickPostear(true);

        if (!post) {

          setIsClickPostear(false);
          postRef.current.focus();

          return Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Para publicar, es necesario que escribas algo',
            showConfirmButton: true,
          });
    
          
        }
        
       try{
        //guardado del Post
        const docRef = await addDoc(collection(db, "post"), {
          userNamePost: name,
          userImagePost: profilePicture,
          userImailPost: userEmail,
          post: post,
          imagePost:'',
          statusimagePost: childValueFile.name ? true : false,
          fechaPost:serverTimestamp(),
        })
    
     

  if (childValueFile.name) {
        const IdPost =  docRef.id;
 
        //guardado de la foto del Post
        const storage = getStorage();
        const storageRef = ref(storage, 'some-child');
        const storageRefprev = ref(storage,`${userEmail}/POST/${IdPost}/${childValueFile.name}`);
  
        const uploadTaskprev = uploadBytesResumable(storageRefprev, childValueFile);
     
  

        uploadTaskprev.on('state_changed', 
            (snapshot) => {
               const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              // console.log('Upload is ' + progress + '% done');
               setProgres(progress);

             
            }, 
            (error) => {

              return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: error,
                showConfirmButton: true,
              });

            }, 
            () => {

            getDownloadURL(uploadTaskprev.snapshot.ref).then((downloadURL) => {
              const postDocRef = doc(db,`post/${IdPost}`);
              updateDoc(postDocRef, {imagePost:downloadURL});
              
              setIsClickPostear(false);
              setProgres(0);

              Swal.fire({
                icon: 'success',
                title: 'Enviando Post!',
                text: 'Enviado',
                showConfirmButton: false,
                timer: 1500,
              });

              onClose();
          
          });
        }
        );
  }
        } catch (error){
        
         

          return Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: error,
            showConfirmButton: true,
          });
           
        }
  
        if (childValueFile.length <= 0 ) {
            Swal.fire({
              icon: 'success',
              title: 'Enviando Publicación',
              text: 'Enviado!',
              showConfirmButton: false,
              timer: 1500,
            });

            setIsClickPostear(false);
            setProgres(0);
            onClose();
      }

      }
    
    

    return(

        <Modal isOpen= {openClose}>

                <ModalHeader>
                    ¿Que estas pensando?
                </ModalHeader>


                <ModalBody>

                <FormGroup onSubmit={handleAddPost}>             
                  <Input
                      id="txtPost"
                      name="txtPost"
                      type="textarea"
                      rows="5"
                      ref={postRef}
                      placeholder="Escribe aqui!"
                      onChange={e => setPost(e.target.value)}
                  />
              </FormGroup>

                <ImageUploadPost 

                onValueFile = {handleChildValueFile}
                
                />
                             
                </ModalBody>
                                  

                <ModalFooter>

                      <Button onClick={onClose} > Cerrar</Button>
                   
                      <button className="btn btn-primary" onClick={handleAddPost} type="submit"  disabled ={isClickPostear}>
                      <span className={` ${isClickPostear ? 'spinner-border spinner-border-sm' : ''} `} role="status" aria-hidden="true"> { isClickPostear? ( ''):( 'Publicar' )}</span>
                      { isClickPostear? ( ' Publicando '+ Math.round(progres)+ '%'):( '' )}
                    </button>
                    
                </ModalFooter>



                </Modal>
                
    )

}

export default ModalAddPost;