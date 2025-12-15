import { Formulario } from "./Formulario";
import "./css/Todo.css";

export const Todo = () => {
    return (
        <main className="mainContainer">
            <h2 className="todo__titulo">Lista de tareas</h2>
            <Formulario />
        </main>
    );
};
