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

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(
    task?.state === TaskState.Creating
  );

  const [taskTitle, setTaskTitle] = React.useState(task?.title || "");
  const {updateTask, updateTaskStatus, deleteTask} = useTask()

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

  function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({id: task.id, title: taskTitle});
    updateTask(task.id, {title: taskTitle})
    setIsEditing(false);
  } 

  function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;

    updateTaskStatus(task.id, checked);
  }

  function handleDeleteTask() {
   deleteTask(task.id);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputChekbox
            checked={task?.concluded}
            onChange={handleChangeTaskStatus}
          />
          <Text
            className={cx("flex-1", {
              "line-through": task?.concluded,
            })}
          >
            {" "}
            {task?.title}{" "}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon type="button" icon={Vector} variant="tertiary" onClick={handleDeleteTask}/>
            <ButtonIcon
              type="button"
              icon={Pencil}
              variant="tertiary"
              onClick={handleEditTask}
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
            <ButtonIcon type="submit" icon={Check} variant="primary" />
          </div>
        </form>
      )}
    </Card>
  );
}
