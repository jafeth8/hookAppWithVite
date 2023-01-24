export const todoReducer=(initialState,action) =>{

    switch (action.type) {
        case 'ABC':
            
            throw new Error('ABC no ha sido implementada');
    
        default:
            return initialState;
    }

}