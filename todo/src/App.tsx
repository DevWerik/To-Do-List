import Text from "./components/text";
import Vector from "./assets/icons/Vector.svg?react";
import Icon from "./components/icon";
import Check from "./assets/icons/Check.svg?react";
import Pencil from "./assets/icons/Pencil.svg?react";
import Plus from "./assets/icons/Plus.svg?react";
import spinner from "./assets/icons/Spinner.svg?react";
import X from "./assets/icons/X.svg?react";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";


export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-2">
        <Text variant="body-sm-bold" className="text-pink-base">
          Ola mundo
        </Text>
        <Text className="text-pink-base">Ola mundo </Text>
        <Text variant="body-md-bold">Ola mundo </Text>
      </div>
      <div className="felx gap-1">
        <Icon svg={Vector} className="fill-green-base" />
        <Icon svg={Check} />
        <Icon svg={Pencil} />
        <Icon svg={Plus} />
        <Icon svg={spinner} animate />
        <Icon svg={X} />
      </div>

      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>

      <div>
        <Button icon={Plus}>Nova tarefa</Button>
      </div>
      <div className="flex gap-1">
        <ButtonIcon icon={Vector} />
        <ButtonIcon icon={Vector} variant={"secondary"} />
        <ButtonIcon icon={Vector} variant={"tertiary"} />
      </div>
    </div>
  );
}
