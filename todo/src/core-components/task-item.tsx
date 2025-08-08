import React from "react";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputChekbox from "../components/input-checkbox";
import Text from "../components/text";
import Vector from "../assets/icons/Vector.svg?react";
import Pencil from "../assets/icons/Pencil.svg?react";
import X from "../assets/icons/X.svg?react";
import Check from "../assets/icons/Check.svg?react";
import InputText from "../components/input-text";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use.task";
import Skeleton from "../components/skeleton";

interface TaskItemProps {
  task: Task;
  loading?: boolean;
}

export default function TaskItem({ task, loading }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(
    task?.state === TaskState.Creating
  );

  const [taskTitle, setTaskTitle] = React.useState(task?.title || "");
  const {updateTask, updateTaskStatus, deleteTask, isUpdateTask, isDeletingTask} = useTask()

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitTask() {
    if (task.state === TaskState.Creating) {
     deleteTask(task.id);
    }

    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "");
  }

  async function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({id: task.id, title: taskTitle});
    await updateTask(task.id, {title: taskTitle})
    setIsEditing(false);
  } 

  function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;

    updateTaskStatus(task.id, checked);
  }

  async function handleDeleteTask() {
   await deleteTask(task.id);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputChekbox
            checked={task?.concluded}
            onChange={handleChangeTaskStatus}
            loading={loading}
          />
          {!loading ? (
            <Text className={cx("flex-1", { "line-through": task?.concluded })}>
              {task?.title}
            </Text>
          ) : (
            <Skeleton className="flex-1 h-6" />
          )}
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={Vector}
              variant="tertiary"
              onClick={handleDeleteTask}
              loading={loading}
              handling={isDeletingTask}
            />

            <ButtonIcon
              type="button"
              icon={Pencil}
              variant="tertiary"
              onClick={handleEditTask}
              loading={loading}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText
            value={taskTitle}
            className="flex-1"
            onChange={handleChangeTaskTitle}
            required
            autoFocus
          />
          <div className="flex gap-1">
            <ButtonIcon
              typeof="button"
              icon={X}
              variant="secondary"
              onClick={handleExitTask}
            />
            <ButtonIcon
              type="submit"
              icon={Check}
              variant="primary"
              handling={isUpdateTask}
            />
          </div>
        </form>
      )}
    </Card>
  );
}
