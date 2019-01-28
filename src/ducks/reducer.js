const initialState = {
    list: []
};

const ADD_TODO = `ADD_TODO`;
const REMOVE_TODO = `REMOVE_TODO`

export default function reducer(state = initialState, action){
    console.log(`reducer,`, action)
    switch(action.type){
        case ADD_TODO:
            let newList = state.list.slice();
            newList.push(action.payload);
            console.log(`new list,`, newList);
            return {...state, list: newList};
        case REMOVE_TODO:
            let newerList = state.list.slice();
            newerList.splice(action.payload, 1)
            console.log(`newer list,`, newerList);
            return {...state, list: newerList};
        default:
            return state;
    }
}

export function addItem(input){
    console.log(`add item fired`)
    //this return is done through the connect method, and is fed into action on reducer
    return {
        type: ADD_TODO,
        payload: input
    }
}

export function removeItem(index){
    console.log(`remove item fired`)
    return {
        type: REMOVE_TODO,
        payload: index
    }
}