import logo from './logo.svg';
import './App.css';
import Users from './Users';
import {Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>Hello world   </h1>
      <button> Normal Button </button> <br></br>
      <Button> Bootstrap button </Button>
      <Users/>
    </div>
  );
}

export default App;
