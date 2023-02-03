
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setusers] = useState([])
  useEffect(() => {
 
  
  try {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => { setusers(res.data)});
  } catch (error) {
    console.log(error);
  }
 
  
  }, [])
  console.log(users);
  return (
    <div className="App">
      {users.map((el)=> 
      <div>
        <h1>{el.name}</h1>
      </div>)}
      
    </div>
  );
}

export default App;
