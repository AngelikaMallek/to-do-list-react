export const saveTasksToLocalStorage = tasks => 
    localStorage.setItem("task",JSON.stringify(tasks));


export const getTasksFromLocalStorage = () =>
    JSON.parse(localStorage.getItem("task")) || [];