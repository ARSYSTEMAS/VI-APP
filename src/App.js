import './App.css';
import BarraNavegacionComponent from './components/BarraNavegacion';
import { CarouselComponent } from './components/Carousel';
import UltimasNoticiasComponent from './components/UltimasNoticias';
import PublicacionesComponent from './components/Publicaciones';
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
     <PublicacionesComponent
     />
      <BottomNavigationBarComponent
     />
    </div>

  );
}

export default App;
