import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HelloWord from './components/HelloWord';

function App() {
  return (
    <div className="App">
      <HelloWord test={''} uneProps={'une props'} />
      <Navbar />
    </div>
  );
}

export default App;