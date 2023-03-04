import { useState } from "react";
import { ActionSection } from "../styles/ActionSection";
import { Artist } from "../styles/Artist";
import { Danger, Primary } from "../styles/Buttons";
import { Card } from "../styles/Card";
import { Details } from "../styles/Details";
import { Image } from "../styles/Image";
import { Title } from "../styles/Title";
import { useDispatch } from "react-redux";
import MyModal from "./UpdateModal";
import { delete_song_requested } from "../slices/songSlice";

type Props = {
  id : string
  img_url: string;
  title: string;
  artist: string;
};

const Cards = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({id: props.id, title: props.title, artist: props.artist, img_url: props.img_url, flag: "update"});
  const dispatch = useDispatch();
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const deleteSong = () => {
    dispatch(delete_song_requested({_id: props.id, title: props.title, artist: props.artist, url: props.img_url}));  
    window.location.reload();
  }

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
          <Danger onClick={deleteSong}>Delete</Danger>
        </ActionSection>
      )}
    </Card>
  );
};

export default Cards;
