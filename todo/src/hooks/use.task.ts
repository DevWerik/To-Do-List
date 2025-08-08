import useLocalStorage from "use-local-storage";
import { TASKS_KEY } from "../models/task";
import type { Task } from "../models/task";
import { TaskState } from "../models/task";
import { delay } from "../helpers/utils";
import React from "react";

export default function useTask() {
  const [task, setTask] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [isUpdateTask, setIsUpdateTask] = React.useState(false);
  const [isDeletingTask, setIsDeletingTask] = React.useState(false);

  function prepareTask() {
    setTask([
      ...task,
      {
        id: Math.random().toString(36).substring(2.9),
        title: "",
        state: TaskState.Creating,
      },
    ]);
  }

  async function updateTask(id: string, payload: { title: Task["title"] }) {
    setIsUpdateTask(true);

    await delay(1000);

    setTask(
      task.map((task) =>
        task.id === id
          ? { ...task, state: TaskState.Created, ...payload }
          : task
      )
    );
    setIsUpdateTask(false);
  }

function updateTaskStatus(id: string, concluded: boolean) {
    setTask(
      task.map((task) =>
        task.id === id
          ? {
              ...task,
              concluded,
            }
          : task
      )
    );
  }

   async function deleteTask (id: string) {
    setIsDeletingTask(true);
    await delay(1000);
    setTask(task.filter((task) => task.id !== id))

    setIsDeletingTask(false)
  }

  return {
    prepareTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdateTask,
    isDeletingTask
  };
}
