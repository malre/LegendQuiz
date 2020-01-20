const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1000
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 25
        }
    }
    if (action.type === 'ADD') {
        return {
            counter: state.counter * 2
        }
    }
    if (action.type === 'SUBTRACT') {
        return {
            counter: 70+((state.counter * 3.5)/100)
        }
    }
    return state;
};

export default reducer;