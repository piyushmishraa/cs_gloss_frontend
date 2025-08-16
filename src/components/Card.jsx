const Card = ({ title, category, url }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{category}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Visit
      </a>
    </div>
  );
};

export default Card;
