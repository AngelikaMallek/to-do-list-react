import { useState, useEffect } from "react";

const useTasks = () => {
    const [hideDoneTasks, setHideDone] = useState(false);

    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
  
    const toogleHideDone = () => {
      setHideDone(hideDoneTasks => !hideDoneTasks);
    };
  
    const removeTask = (id) => {
      setTasks(tasks => tasks.filter(tasks => tasks.id !== id))
    };
  
    const toogleTaskDone = (id) => {
      setTasks(tasks => tasks.map(task => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
  
        return task;
      }));
    }
  
    const setAllDone = () => {
      setTasks(tasks => tasks.map(task => ({
        ...task,
        done: true,
      })));
    };
  
    const addNewTask = (newTaskContent) => {
        setTasks(tasks => [
          ...tasks, 
          {
            content: newTaskContent,
            done: false,
            id: tasks.length === 0 ? 1 : tasks[tasks.length -1].id +1,
          },
        ])
    }

    return {tasks, hideDoneTasks, toogleHideDone, removeTask, toogleTaskDone, setAllDone, addNewTask};
}

export default useTasks;