import { useTodoList } from "../hooks/useTodoList";
import { Formulario } from "./Formulario";
import { CardTarea } from "./CardTarea";
import "./css/Todo.css";

export const Todo = () => {
    const { addTodo, deleteTodo, toggleTodo, state } = useTodoList();

    const handleTodo = (tareaNueva) => {
        addTodo(tareaNueva);
    };

    return (
        <main className="mainContainer">
            <h2 className="todo__titulo">Lista de tareas</h2>
            <Formulario handleTodo={handleTodo} />

            {state.length === 0 ? (
                <p>No hay tareas disponibles</p>
            ) : (
                <CardTarea
                    tareas={state}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                />
            )}
        </main>
    );
};
