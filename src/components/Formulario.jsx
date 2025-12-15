import "./css/Formulario.css";

export const Formulario = () => {
    return (
        <section>
            <h3>Añadir tarea</h3>
            <form>
                <input
                    type="text"
                    name="tarea"
                    placeholder="Ingresa la tarea..."
                />
                <textarea
                    placeholder="Ingresa la descripción de la tarea..."
                    rows={12}
                ></textarea>
                <input type="submit" value="Añadir tarea" />
            </form>
        </section>
    );
};
