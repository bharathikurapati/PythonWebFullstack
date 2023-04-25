import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    alert('Clicked on button')
  } 
    return (
    <div className="App">
    
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
