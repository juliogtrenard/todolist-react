import { nanoid } from "nanoid";
import "./css/Formulario.css";

export const Formulario = ({ handleTodo }) => {
    const handleSubmit = (ev) => {
        ev.preventDefault();

        const tarea = {
            id: nanoid(4),
            tarea: ev.target.tarea.value,
            descripcion: ev.target.descripcion.value,
            done: false,
            date: new Date(),
        };

        handleTodo(tarea);

        ev.target.tarea.value = "";
        ev.target.descripcion.value = "";
    };

    return (
        <section>
            <h3>Añadir tarea</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="tarea"
                    className="form__tarea"
                    placeholder="Ingresa la tarea..."
                />
                <textarea
                    name="descripcion"
                    className="form__descripcion"
                    placeholder="Ingresa la descripción de la tarea..."
                    rows={12}
                ></textarea>
                <input
                    type="submit"
                    className="form__btnSubmit"
                    value="Añadir tarea"
                />
            </form>
        </section>
    );
};
