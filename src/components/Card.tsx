import { Artist } from "../styles/Artist";
import { Card } from "../styles/Card";
import { Details } from "../styles/Details";
import { Image } from "../styles/Image";
import { Title } from "../styles/Title";

type Props = {
    img_url : string,
    title: string,
    artist: string
}

const Cards = (props: Props) => {
  return (
    <Card>
      <Image src={props.img_url} />
      <Details>
        <Title>{props.title}</Title>
        <Artist>{props.artist}</Artist>
      </Details>
    </Card>
  );
};

export default Cards;