import { CardTareaItem } from "./CardTareaItem";

export const CardTarea = ({ tareas, deleteTodo, toggleTodo }) => {
    return (
        <section className="todo__lista">
            {tareas.map((tarea) => (
                <CardTareaItem
                    key={tarea.id}
                    tarea={tarea}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </section>
    );
};
