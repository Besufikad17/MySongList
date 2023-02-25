import { FC, ReactNode, useState } from "react";
import { ActionSection } from "../styles/ActionSection";
import { Danger, Secondary } from "../styles/Buttons";
import { BG } from "../styles/Modal";
import { Modal } from "../styles/Modal";
import { Center } from "../styles/Modal";
import { Form } from "../styles/Form";
import { FormContainer } from "../styles/Form";
import { Input } from "../styles/Form";
import { Header, Title } from "../styles/Title";
import { Container } from "../styles/Image";

interface Props {
  ClickHandler: () => void;
  children: ReactNode;
  data : { id: string, url: string, title: string, artist: string }
}

const MyModal: FC<Props> = (props: Props) => {
  const [img, setImg] = useState(null) as any
  const default_img = "https://us.123rf.com/450wm/soloviivka/soloviivka1606/soloviivka160600001/59688426-music-note-vector-icon-white-on-black-background.jpg?ver=6";
  
  
  return (
    <BG>
      <Center>
        <Modal>
          <FormContainer>
            <Header>Add a song</Header>
            <Container src={props.data ? props.data.url : (img ? URL.createObjectURL(img) : default_img)} alt=""/>
            <Form>
              <Input name="img" type="file" onChange={(e) => setImg(e.target.files ? e.target.files[0] : null)} />
              <Input name="title" type="text" placeholder="title" value={props.data ? props.data.title: ""} />
              <Input name="artist" type="text" placeholder="artist" value={props.data ? props.data.artist: ""} />
              <ActionSection>
                <Secondary>Submit</Secondary>
                <Danger  onClick={props.ClickHandler}>
                    close
                </Danger>
              </ActionSection>
            </Form>
          </FormContainer>
        </Modal>
      </Center>
    </BG>
  );
};

export default MyModal;
