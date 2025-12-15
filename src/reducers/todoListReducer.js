export const todoListReducer = (state = [], { type, payload }) => {
    switch (type) {
        case "add todo":
            return [payload, ...state];
        case "delete todo":
            const newState = state.filter((todo) => todo.id != payload);
            return newState;
        case "toggle todo":
            return;
        default:
            return state;
    }
};
