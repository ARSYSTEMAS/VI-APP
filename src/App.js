import './App.css';
import BarraNavegacionComponent from './components/BarraNavegacion';
import { CarouselComponent } from './components/Carousel';
import UltimasNoticiasComponent from './components/UltimasNoticias';
import PublicacionesIntroComponent from './components/PublicacionesIntro';
import BottomNavigationBarComponent from './components/BottomNavigationBar';


function App() {



  return (
    <div className="App">
     <BarraNavegacionComponent
    />
     <CarouselComponent
     />
     <UltimasNoticiasComponent
     />
     <PublicacionesIntroComponent
     />
      <BottomNavigationBarComponent
     />

    </div>

  );
}

export default App;
