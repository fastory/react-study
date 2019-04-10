let nextTodoId = 0;
export const addUser = info => ({
    type: "ADD_USER",
    id: nextTodoId++,
    info
});

export const delUser = id => ({
    type: "DELETE_USER",
    id
});

