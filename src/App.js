import './App.css';
import  TaskList  from "../src/components/TaskList";
import OperadorTernario2 from './components/operadorTernario2';

function App() {
      const tareasIniciales = [
    { id: 1, texto: 'Aprender React', estado: 'completada' },
    { id: 2, texto: 'Practicar hooks', estado: 'en progreso' },
    { id: 3, texto: 'Crear proyecto final', estado: 'pendiente' }
    ];
  return (
    <div>
      <h1>Mis tareas</h1>
      <TaskList tasks={tareasIniciales} />
      <div className="App">
      <OperadorTernario2 />
      </div>
    </div>
    
    
  );
}

export default App;
