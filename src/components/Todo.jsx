import { useTodoList } from "../hooks/useTodoList";
import { Formulario } from "./Formulario";
import { CardTarea } from "./CardTarea";
import "./css/Todo.css";

export const Todo = () => {
    const { addTodo, deleteTodo, toggleTodo, state } = useTodoList();

    const handleTodo = (tareaNueva) => {
        const { id, tarea, descripcion, done, date } = tareaNueva;

        const newTodo = {
            id,
            tarea,
            descripcion,
            done,
            date,
        };

        addTodo(newTodo);
    };

    return (
        <main className="mainContainer">
            <h2 className="todo__titulo">Lista de tareas</h2>
            <Formulario handleTodo={handleTodo} />
            <section className="todo__lista">
                {state.length === 0 ? (
                    <p>No hay tareas disponibles</p>
                ) : (
                    state.map((tarea) => (
                        <CardTarea
                            key={tarea.id}
                            tarea={tarea}
                            deleteTodo={deleteTodo}
                            toggleTodo={toggleTodo}
                        />
                    ))
                )}
            </section>
        </main>
    );
};
