import { ActionSection } from "../styles/ActionSection";
import { Artist } from "../styles/Artist";
import { Danger, Primary } from "../styles/Buttons";
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
      <ActionSection>
        <Primary>
          Update
        </Primary>
        <Danger>
          Delete
        </Danger>
      </ActionSection>
    </Card>
  );
};

export default Cards;