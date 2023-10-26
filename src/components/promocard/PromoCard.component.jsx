import "./promocard.styles.css";

const PromoCard = ({
  container,
  content,
  links,
  heading,
  description,
  linkContent,
}) => {
  return (
    <section className={`promo-card-container ${container}`}>
      <div className={`promo-card-content-container ${content}`}>
        <h3>{heading}</h3>
        <p>{description}</p>
        <div className={`promo-card-links-container ${links}`}>
          <a href="/">Learn more</a>
          <a href="/">{linkContent ? linkContent : "Buy"}</a>
        </div>
      </div>
    </section>
  );
};

export default PromoCard;
