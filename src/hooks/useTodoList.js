import { useReducer } from "react";
import { todoListReducer } from "../reducers/todoListReducer";

export const useTodoList = () => {
    const [state, dispatch] = useReducer(todoListReducer, []);

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

    return {
        state,
        addTodo,
        deleteTodo,
    };
};
