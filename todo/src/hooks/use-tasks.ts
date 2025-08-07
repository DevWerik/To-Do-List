import useLocalStorage from "use-local-storage";
import { TASKS_KEY } from "../models/task";
import type { Task } from "../models/task"; // ← Tipo importado separadamente

export default function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks,
    tasksCount: tasks.length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
}