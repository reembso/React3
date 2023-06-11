import './App.css';
import Input from './component/Input';
import Button from './component/Button';
import TodoList from './component/Array';
function App() {
  return (
    <div className="App">
     < Input 
     type="text"
    placeholder="write text"/>

<Button
text="I am button"

 style = {{
  width:'200px',
  height:'50px',
  backgroundColor: 'pink',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
}}
/>
<TodoList/>

    </div>
  );
}


export default App;
