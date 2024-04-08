
import './App.css';

import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  
  
  return (
    <div className="App">
     <h1>Olá React!</h1>
     <Frase/>
     <Frase/>     
     <SayMyName nome="Diego"/>

     <Pessoa
     nome="Diego"
     idade="21"
     prof="Programador"
     foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2A96iiljPO_sadcV03xYu8Xsz7Vg6U3APG2T8ClOcA&s"
     />

     <List/>
    </div>
  );
}

export default App;
