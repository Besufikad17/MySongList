type Props = {
    img_url : string,
    title: string,
    artist: string,
    release_date: string,

}

const Cards = (props: Props) => {
  return (
    <div className="card">
      <img src={props.img_url} />
      <div className="details">
        <h1>{props.title}</h1>
        <h1>{props.artist}</h1>
        <h1>{props.release_date}</h1>
      </div>
    </div>
  );
};

export default Cards;