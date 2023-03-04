import { FC, ReactNode, useState, MouseEvent } from "react";
import { ActionSection } from "../styles/ActionSection";
import { Danger, Secondary } from "../styles/Buttons";
import { BG } from "../styles/Modal";
import { Modal } from "../styles/Modal";
import { Center } from "../styles/Modal";
import { Form } from "../styles/Form";
import { FormContainer } from "../styles/Form";
import { Input } from "../styles/Form";
import { Header } from "../styles/Title";
import { Container } from "../styles/Image";
import { useDispatch } from "react-redux";
import { update_song_requested } from "../slices/songSlice";
import axios from "axios";

interface Props {
  ClickHandler: () => void;
  children: ReactNode;
  data: {
    id: string;
    img_url: string;
    title: string;
    artist: string;
    flag: string;
  };
}

const MyModal: FC<Props> = (props: Props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(props.data.title);
  const [artist, setArtist] = useState(props.data.artist);
  const [img, setImg] = useState(null) as any;

  const upload = (callback: (u: string) => void) => {
    if (img === null) {
      alert("Please upload img!!")
    } else {

      const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;
      const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

      var bodyFormData = new FormData();
      bodyFormData.append("file", img ? img : null);
      bodyFormData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

      axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, bodyFormData).then(res => {
        if (res.data.secure_url !== undefined) {
          const uploadedFileUrl: string = res.data.secure_url;
          console.log(uploadedFileUrl);
          callback(uploadedFileUrl)
        }
      })
    }
  };

  const dispatchUpdate = (url: string) => {
    dispatch(update_song_requested({
      _id: props.data.id,
      url,
      title,
      artist
    }))
    window.location.reload();
  };

  const submit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    upload(dispatchUpdate);
  };

  return (
    <BG>
      <Center>
        <Modal>
          <FormContainer>
            <Header>Add a song</Header>
            <Container
              src={
                props.data
                  ? props.data.img_url
                  : img
                  ? URL.createObjectURL(img)
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPZLAhSInzWQx4vk1i_-8OiuEVEUraqTCCyvZvU3ShA&s"
              }
              alt=""
            />
            <Form>
              <Input
                name="img"
                type="file"
                onChange={(e) => {
                  setImg(e.target.files ? e.target.files[0] : null);
                }}
              />
              <Input
                name="title"
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                name="artist"
                type="text"
                placeholder="artist"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
              />

              <ActionSection>
                <Secondary onClick={submit}>Submit</Secondary>
                <Danger onClick={props.ClickHandler}>close</Danger>
              </ActionSection>
            </Form>
          </FormContainer>
        </Modal>
      </Center>
    </BG>
  );
};

export default MyModal;
