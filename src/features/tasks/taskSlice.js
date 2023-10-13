import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: taskContent }) => {
            tasks.push(taskContent);
        },
        toogleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toogleTaskDone: ({ tasks }, { payload: taskIndex }) => {
            const index = tasks.findIndex(task => task.id === taskIndex);
            tasks[index].done = !tasks[index].done;
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        removeTask: ({ tasks }, { payload: taskIndex }) => {
            const index = tasks.findIndex(task => task.id === taskIndex);
            tasks.splice(index,1);
        }
    },
});

export const { addTask, toogleHideDone, toogleTaskDone, setAllDone, removeTask } = tasksSlice.actions;
export const selectTasksState = state => state.tasks;
export default tasksSlice.reducer;