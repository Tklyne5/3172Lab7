import image from './react-img.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Lab 7 - Tyson Klyne
        </h1>
        <img src={image} className="image" alt="cool drawing" />
        <p>
          Cool drawing I made.
        </p>
        
      </header>
    </div>
  );
}

export default App;
