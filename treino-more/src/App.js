
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';


function App() {
  
  
  return (
    <div className="App">
     <h1>Olá React!</h1>
     <SayMyName nome="Diego"/>

     <Pessoa
     nome="Diego"
     idade="21"
     prof="Programador"
     foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2A96iiljPO_sadcV03xYu8Xsz7Vg6U3APG2T8ClOcA&s"
     />
    </div>
  );
}

export default App;
