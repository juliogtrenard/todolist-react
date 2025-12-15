import "./css/CardTarea.css";

export const CardTarea = ({ tarea, deleteTodo, toggleTodo }) => {
    return (
        <article className="card">
            <div>
                <h4 className="card__titulo">{tarea.tarea}</h4>
                <p className="card__descripcion">{tarea.descripcion}</p>
                <p className="card__fecha">
                    {new Date(tarea.date).toLocaleString()}
                </p>
            </div>
            <div>
                <button
                    onClick={() => toggleTodo(tarea.id)}
                    className={`card__btnEstado ${
                        tarea.done ? "finalizada" : "pendiente"
                    }`}
                >
                    {tarea.done ? "Finalizada" : "Pendiente"}
                </button>
                <button
                    onClick={() => deleteTodo(tarea.id)}
                    className="card__btnEliminar"
                >
                    Eliminar
                </button>
            </div>
        </article>
    );
};
