const initialState = {
    list: [`Take out the trash`, `Do laundry`]
};

const ADD_TODO = `ADD_TODO`;

export default function reducer(state = initialState, action){
    console.log(`reducer,`, action)
    switch(action.type){
        case ADD_TODO:
            let newList = state.list.slice();
            newList.push(action.payload);
            console.log(`new list,`, newList);
            return {...state, list: newList};
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