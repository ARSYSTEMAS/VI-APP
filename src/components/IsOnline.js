import React, { useState, useEffect} from 'react'
import Swal from 'sweetalert2';

export function isOnlineApp(){


    const [isOnline, setIsOnline] = useState(navigator.onLine);

    const handleOnlineStatus = () => { setIsOnline(navigator.onLine); }
  


    useEffect(() => {

        window.addEventListener('online', handleOnlineStatus);
        window.addEventListener('offline', handleOnlineStatus);

        return () => {


            window.removeEventListener('online',handleOnlineStatus);
            window.removeEventListener('offline',handleOnlineStatus);
        };

    }, []);


    if (!isOnline){

            return Swal.fire(
                'Parece que no hay internet!',
                'Revisa tu conexión para seguir navegando',
                'Reintentar'
            );        
    }
     
}
