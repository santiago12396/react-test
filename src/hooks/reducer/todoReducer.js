export const todoReducer = (state, action) => {
    switch (action) {
        case 'ABC':
            throw new Error('Action.type = ABC no esta implementada');
        default:
            return state;
    }
}
