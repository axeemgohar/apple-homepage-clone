import "./card.styles.css";

const Card = ({ container, content, links, heading, description }) => {
  return (
    <section className={`card-container ${container}`}>
      <div className={`card-content-container ${content}`}>
        <h2>{heading}</h2>
        <p>{description}</p>
        <div className={`card-links-container ${links}`}>
          <a href="/">Learn more</a>
          <a href="/">Buy</a>
        </div>
      </div>
    </section>
  );
};

export default Card;
