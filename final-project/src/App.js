import './App.css';
import Carousel from './Components/Carousel/Carousel';
import Header from './Components/Header/Header';
import Example from './Example.jsx';
import Fromto from './Components/Fromto/Fromto.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      
      <Fromto/>
      <Example/>
    </div>
  );
}

export default App;
