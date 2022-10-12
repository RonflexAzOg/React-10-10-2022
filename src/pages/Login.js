import '../styles/Login.scss';
import ColumnLeft from '../components/Login/ColumnLeft';
import ColumnRight from '../components/Login/ColumnRight';

function Login() {
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

export default Login;