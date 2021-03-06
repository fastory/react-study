const users = (state = [], action) => {
    console.log("执行action中的" + action.type)
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                {
                    key: state.length>0?state[state.length - 1].key+1:1,
                    name: action.info.name,
                    age: action.info.age,
                    address: action.info.address,
                }
            ]
        case 'DELETE_USER':
            return state.filter(item => item.key!=action.key)
        case 'INIT_USER':
            return action.userList
        case 'UPDATE_USER':
            return [...action.data]
        default:
            return state
    }
}

export default users
