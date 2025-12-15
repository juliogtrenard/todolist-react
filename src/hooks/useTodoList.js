import { useEffect, useReducer } from "react";
import { todoListReducer } from "../reducers/todoListReducer";

const init = () => {
    const tareas = localStorage.getItem("tareas");
    return tareas ? JSON.parse(tareas) : [];
};

export const useTodoList = () => {
    const [state, dispatch] = useReducer(todoListReducer, [], init);

    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(state));
    }, [state]);

    const addTodo = (newTodo) => {
        const action = {
            type: "add todo",
            payload: newTodo,
        };

        dispatch(action);
    };

    const deleteTodo = (id) => {
        const action = {
            type: "delete todo",
            payload: id,
        };

        dispatch(action);
    };

    const toggleTodo = (id) => {
        const action = {
            type: "toggle todo",
            payload: id,
        };

        dispatch(action);
    };

    return {
        state,
        addTodo,
        deleteTodo,
        toggleTodo,
    };
};
