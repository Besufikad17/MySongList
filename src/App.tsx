import { Container } from "./styles/Container";
import { Row } from "./styles/Row";
import { Primary, Secondary } from "./styles/Buttons";
import { GrAdd } from "react-icons/gr";
import { useEffect, useState } from "react";
import { ActionSection } from "./styles/ActionSection";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { getSongFetch } from "./actions";
import { ISong } from "./utils/types";
import Cards from "./components/Card";
import MyModal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const songs: ISong[] = useSelector(
    (state: RootState) => state.songReducer.songs
  );
  const isLoading: boolean = useSelector(
    (state: RootState) => state.songReducer.pending
  );

  useEffect(() => {
    dispatch({
      type: "songs/get_songs",
    });
  }, []);
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      {isLoading ? (
        <Container>
          <h1>Loading...</h1>
        </Container>
      ) : (
        <Container>
          {songs.length === 0 ? (
            <h1>No songs found</h1>
          ) : (
            <Row>
              {songs.map((song, idx) => {
                return <Cards
                  img_url={song.url}
                  title={song.title}
                  artist={song.artist}
                  id={song.id ? song.id : song._id}
                  key={idx}
                />;
              })}
            </Row>
          )}
          <br />

          {isOpen ? (
            <MyModal ClickHandler={toggle}>
              <ActionSection>
                <Primary>Submit</Primary>
                <Secondary onClick={toggle}>Close</Secondary>
              </ActionSection>
            </MyModal>
          ) : (
            <Secondary onClick={toggle}>
              <GrAdd />
              Add song
            </Secondary>
          )}
        </Container>
      )}
    </div>
  );
}

export default App;
