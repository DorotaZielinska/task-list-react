import { useState, useEffect } from "react";

const getInitialTasks = () => {
    const defaultTask = [
        { id: 1, content: "przejść na Reacta", done: false },
        { id: 2, content: "zjeść obiad", done: true },
    ];

    const localStorageTasks = localStorage.getItem("tasks");

    return localStorageTasks
        ? JSON.parse(localStorageTasks)
        : [] || defaultTask;
};

export const useTasks = () => {
    const [tasks, setTasks] = useState(getInitialTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const removeTask = (id) => {
        setTasks(task => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
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
            done: true
        })));
    };

    const addNewTask = (newTaskContent) => {
        setTasks(tasks => [
            ...tasks,
            {
                content: newTaskContent,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            },
        ]);

    };

    return {
        tasks,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask,
    };

};


