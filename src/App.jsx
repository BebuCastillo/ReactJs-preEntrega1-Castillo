import './App.css';
import Button from './components/Button';
import Navbar from './components/Navbar';

function App() {
  const handleClick = (name) => {
    alert("El apartado " + name + " está aún en Construcción");
  };

  return (
   <div>
    <Navbar />
    <Button text="Inicio" handleClick={handleClick}/>
    <Button text="Quienes Somos" handleClick={handleClick}/>
    <Button text="Productos" handleClick={handleClick}/>
    <h1>Ingresar</h1>
   </div>
  );
}

export default App;
