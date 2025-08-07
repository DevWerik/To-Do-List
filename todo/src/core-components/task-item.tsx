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

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(task?.state === TaskState.Creating);

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitTask() {
    setIsEditing(false);
  }

  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <InputChekbox
            value={task?.concluded?.toString()}
            checked={task?.concluded}
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
            <ButtonIcon icon={Vector} variant="tertiary" />
            <ButtonIcon
              icon={Pencil}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </>
      ) : (
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon icon={X} variant="secondary" onClick={handleExitTask} />
            <ButtonIcon icon={Check} variant="primary" />
          </div>
        </>
      )}
    </Card>
  );
}
