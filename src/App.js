import './App.scss';
import ColumnLeft from './components/ColumnLeft';
import ColumnRight from './components/ColumnRight';

function App() {
  return (
    <div className="App">
      <div className="column-left">
        <ColumnLeft />
      </div>
      <div className="column-right">
        <ColumnRight />
      </div>
    </div>
  );
}

export default App;