import { Container } from "./styles/Container";
import { Row } from "./styles/Row";
import { Primary, Secondary } from "./styles/Buttons";
import { GrAdd } from "react-icons/gr";
import { useState } from "react";
import { ActionSection } from "./styles/ActionSection";
import Cards from "./components/Card";
import MyModal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const data = {id: "", title:"", artist:"", url:""}

  var lists = [
    {
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVpO5-cW2KnvmL6jOXXQGYq7VBjwI4LyQLAYkRRtLqzMyquYXroeh9cyn0x5b3GrR-lXw&usqp=CAU",
      title: "Lithium",
      artist: "Nirvana",
    },
    {
      img_url:
        "https://i.scdn.co/image/ab67616d0000b273a53a4cb046216d7ac049b5bf",
      title: "Mamacita",
      artist: "Travis scott",
    },
    {
      img_url:
        "https://i.scdn.co/image/ab67616d0000b2736e0085e4e6291eadadc4730f",
      title: "U-Rei",
      artist: "Number girl",
    },
    {
      img_url:
        "http://cdn.shopify.com/s/files/1/0065/8482/7956/products/the-pillows-runners-high.jpg?v=1662580353",
      title: "Runners high",
      artist: "The pillows",
    },
  ];
  var listItems = lists.map((l) => (
    <Cards img_url={l.img_url} title={l.title} artist={l.artist} id="" />
  ));

  return (
    <div className="App">
      <Container>
        {listItems.length === 0 ? (
          <h1>No songs found</h1>
        ) : (
          <Row>{listItems} </Row>
        )}
        <br />

        {isOpen ? (
          <MyModal ClickHandler={toggle} data={data}>
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
    </div>
  );
}

export default App;
