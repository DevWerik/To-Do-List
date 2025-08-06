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

export default function TaskItem() {
  const [isEditing, setIsEditing] = React.useState(false);

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
          <InputChekbox />
          <Text className="flex-1"> Fazer compras da semana </Text>
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
