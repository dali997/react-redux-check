
import './App.css';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';


function App() {
  return (
    <div className="App">
    
      <TaskList />
      <AddTask/>
      
    </div>
  );
}

export default App;
