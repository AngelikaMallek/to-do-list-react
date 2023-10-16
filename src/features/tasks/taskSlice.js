import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocaleStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        isLoading: false,
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
        },
        fetchExampleTasks: state => {
            state.isLoading = true;
        },
        setTasks : (state, {payload: tasks}) => {
            state.tasks = tasks;
            state.isLoading = false;
        },
    },
});

export const { 
    addTask, 
    toogleHideDone, 
    toogleTaskDone, 
    setAllDone, 
    removeTask, 
    fetchExampleTasks, 
    setTasks, 
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsLoading = state => selectTasksState(state).isLoading;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEmptyTasksDone = state => selectTasks(state).every(({ done }) => done);
export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export default tasksSlice.reducer;