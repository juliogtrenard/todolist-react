import "./css/CardTareaItem.css";

export const CardTareaItem = ({ tarea, toggleTodo, deleteTodo }) => {
    return (
        <article className={`card ${tarea.done ? "card--disabled" : ""}`}>
            <div>
                <h4 className="card__titulo">{tarea.tarea}</h4>
                <p className="card__descripcion">{tarea.descripcion}</p>
                <p className="card__fecha">
                    {new Date(tarea.date).toLocaleString()}
                </p>
            </div>

            <div>
                <button
                    disabled={tarea.done}
                    onClick={() => toggleTodo(tarea.id)}
                    className={`card__btnEstado ${
                        tarea.done ? "finalizada" : "pendiente"
                    }`}
                >
                    {tarea.done ? "Finalizada" : "Pendiente"}
                </button>

                <button
                    disabled={tarea.done}
                    onClick={() => deleteTodo(tarea.id)}
                    className="card__btnEliminar"
                >
                    Eliminar
                </button>
            </div>
        </article>
    );
};
