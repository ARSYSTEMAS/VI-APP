import React, {useState} from 'react'
import Swal from 'sweetalert2'
import '../css/imageUploadPost.css'
import Spinner from './Spinner'

function FileUploadPage({onValueFile}){
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
	const [isSelected, setIsSelected] = useState(false);
	const [foto, setFoto] = useState();

	
	const changeHandler = async () => {

				const { value: file } = await Swal.fire({
					title: 'Selecciona 1 Imagen',
					input: 'file',
					inputAttributes: {
						'accept': 'image/*',
						'aria-label': 'Upload your profile picture'
					}
				})

				if (file) {					
					
					setIsSelected(true);
					const reader = new FileReader()
					reader.onload = (e) => {
						setSelectedFile(file);
						onValueFile(file);
						setFoto(e.target.result);
					Swal.fire({
						title: 'Tu imagen seleccionada',
						imageUrl: e.target.result,
						imageAlt: 'The uploaded picture'
					})
					}
					reader.readAsDataURL(file)

					
				}

				
	};

	return(
		<div>								
				 <p onClick={changeHandler} style={{cursor:"pointer"}} ><i className="bi bi-cloud-arrow-up"></i>Subir Foto!</p>
				
				 {!foto == isSelected ?   <Spinner /> : ''}
				 {isSelected ? (
					
                     <div className="imgresponsive">
						 <img  src={foto}  alt="Imagen" />
					 </div>
					 
				 ) : (
					 ''
				)}
			 </div>
		 )
}


export default FileUploadPage;