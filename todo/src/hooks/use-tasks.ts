import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState } from "../models/task";
import type { Task } from "../models/task"; // ← Tipo importado separadamente

export default function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Created)
      .length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
}