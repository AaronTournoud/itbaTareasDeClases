import "../styles/Tasklist.css";

const TaskList = ({ tasks }) => {
  // Función para determinar icono y color según estado
    const getTaskStatus = (estado) => {
        return estado === "completada"
        ? { icon: "✓", color: "green", className: "completed" }
        : estado === "en progreso"
        ? { icon: "⏳", color: "orange", className: "in-progress" }
        : { icon: "⏱️", color: "gray", className: "pending" };
    };

    // Estadísticas
    const completadas = tasks.filter((t) => t.estado === "completada").length;
    const enProgreso = tasks.filter((t) => t.estado === "en progreso").length;
    const pendientes = tasks.filter((t) => t.estado === "pendiente").length;

    return (
        <div className="task-list">
        <ul>
            {/* Operador ternario para mostrar mensaje si no hay tareas */}
            {tasks.length === 0 ? (
            <p>No hay tareas pendientes</p>
            ) : (
            tasks.map((task) => {
                const { icon, color, className } = getTaskStatus(task.estado);
                return (
                <li key={task.id} className={className}>
                    <span style={{ color, marginRight: "8px" }}>{icon}</span>
                    {task.texto}
                </li>
                );
            })
            )}
        </ul>
        {tasks.length > 0 && (
            <div className="stats">
            <p>✅ Completadas: {completadas}</p>
            <p>⏳ En progreso: {enProgreso}</p>
            <p>⏱️ Pendientes: {pendientes}</p>
            </div>
        )}
        </div>
    );
};

export default TaskList;
