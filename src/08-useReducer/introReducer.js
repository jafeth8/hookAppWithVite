const initialState = [{
    id: 1,
    todo:'aprender ingles',
    done:false
}]

const todoReducer = (state = initialState, action={}) => {

    if(action.type === 'ADD_TODO') {
        return [...state,action.payload]
    }

    return state
}

let todos=todoReducer();

console.log(todos)

const newState = {
    id:2,
    todo:'aprender css',
    done:false
}

const addTodoAction={
    type:'ADD_TODO',
    payload:newState
}

//pasar estado anterior
todos=todoReducer(todos,addTodoAction);

console.log(todos)