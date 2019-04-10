const users = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                {
                    id: action.id,
                    key: action.info.id,
                    name: action.info.name,
                    age: action.info.age,
                    address: action.info.address,
                }
            ]
        case 'DEL_USER':
            return state.splice(state.findIndex(item => item.info.id === action.info.key), 1)
        default:
            return state
    }
}

export default users
