import './App.css';
import CreateTaskForm from "./components/CreateTaskForm";
import {Stack} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Stack gap={2} className="Title text-center p-3">
        <h1>Focus! Focus! Focus!</h1>
        <h2>Your personal time manager.</h2>
      </Stack>

      <CreateTaskForm />
    </div>
  );
}

export default App;
