export const addUser = info => ({
    type: "ADD_USER",
    info
});

export const delUser = key => ({
    type: "DELETE_USER",
    key
});

export const initUser = userList => ({
    type: "INIT_USER",
    userList
});

