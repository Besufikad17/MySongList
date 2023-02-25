import { useState } from "react";
import { ActionSection } from "../styles/ActionSection";
import { Artist } from "../styles/Artist";
import { Danger, Primary } from "../styles/Buttons";
import { Card } from "../styles/Card";
import { Details } from "../styles/Details";
import { Image } from "../styles/Image";
import { Title } from "../styles/Title";
import MyModal from "./Modal";

type Props = {
  id : string
  img_url: string;
  title: string;
  artist: string;
};

const Cards = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const data = {"title": props.title, "url": props.img_url, "artist": props.artist, "id": props.id}

  return (
    <Card>
      <Image src={props.img_url} />
      <Details>
        <Title>{props.title}</Title>
        <Artist>{props.artist}</Artist>
      </Details>
      {isOpen ? (
        <MyModal ClickHandler={toggle} data={data}>
          <ActionSection>
            <Primary>Update</Primary>
            <Danger>Delete</Danger>
          </ActionSection>
        </MyModal>
      ) : (
        <ActionSection>
          <Primary onClick={toggle}>Update</Primary>
          <Danger>Delete</Danger>
        </ActionSection>
      )}
    </Card>
  );
};

export default Cards;
