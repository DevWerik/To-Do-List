import useLocalStorage from "use-local-storage";
import { TASKS_KEY } from "../models/task";
import type { Task } from "../models/task";
import { TaskState } from "../models/task";

export default function useTask() {
  const [task, setTask] = useLocalStorage<Task[]>(TASKS_KEY, []);

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

  function updateTask(id: string, payload: { title: Task["title"] }) {
    setTask(
      task.map((task) =>
        task.id === id
          ? { ...task, state: TaskState.Created, ...payload }
          : task
      )
    );
  }

  return {
    prepareTask,
    updateTask,
  };
}
