import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import Vector from "../assets/icons/Vector.svg?react";
import Check from "../assets/icons/Check.svg?react";
import Pencil from "../assets/icons/Pencil.svg?react";
import Plus from "../assets/icons/Plus.svg?react";
import spinner from "../assets/icons/spinner.svg?react";
import X from "../assets/icons/X.svg?react";


export default function PageComponents() {
   return (
    <Container>
      <div className="grid gap-10">
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

        <div className="flex gap-1">
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loadinng>5</Badge>
        </div>

        <div>
          <Button icon={Plus}>Nova tarefa</Button>
          <Button icon={Plus} handling>Criando...</Button>
        </div>
        <div className="flex gap-1">
          <ButtonIcon icon={Vector} />
          <ButtonIcon icon={Vector} variant={"secondary"} />
          <ButtonIcon icon={Vector} variant={"tertiary"} />
          <ButtonIcon icon={Vector} loading />
          <ButtonIcon icon={Vector} handling />
        </div>
        <div>
          <InputText />
        </div>
        <div>
          <InputCheckbox />
          <InputCheckbox loading/>
          
        </div>
        <div>
          <Card size="md">Olá mundo</Card>
        </div>
        <div className="space-y-2"></div>
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
        <Skeleton className="w-96" />
      </div>
    </Container>
  );
}