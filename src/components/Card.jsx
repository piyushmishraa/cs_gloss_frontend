const Card = (props) => {

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.category}</p>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        Visit
      </a>
    </div>
  );
};

export default Card;
