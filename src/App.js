import './App.css';
import BarraNavegacionComponent from './components/BarraNavegacion';
import { CarouselComponent } from './components/Carousel';
import UltimasNoticiasComponent from './components/UltimasNoticias';
import PublicacionesIntroComponent from './components/PublicacionesIntro';
import BottomNavigationBarComponent from './components/BottomNavigationBar';
import { useState } from 'react';


function App() {

  const [isAddPost, setIsAddPost] = useState(false);

  return (
    <div className="App">
     <BarraNavegacionComponent
      setIsAddPost = {setIsAddPost} 
    />
     <CarouselComponent
     />
     <UltimasNoticiasComponent
     />
     <PublicacionesIntroComponent
     IsAddPost = {isAddPost}   
     setIsAddPost = {setIsAddPost}
     />
      <BottomNavigationBarComponent
      setIsAddPost = {setIsAddPost} 
     />

    </div>

  );
}

export default App;
