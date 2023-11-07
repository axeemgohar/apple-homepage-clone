import "./app.css";
import { Fragment } from "react";
import Nav from "./components/nav/Nav.component";
import Card from "./components/card/Card.component";
import PromoCard from "./components/promocard/PromoCard.component";
import Footer from "./components/footer/Footer.component";
const App = () => {
  return (
    <Fragment>
      <Nav />
      <Card
        container="section-one-container"
        content="section-one-content"
        links="section-one-links"
        heading="iPhone 15 Pro"
        description="Titanium. So strong. So light. So Pro"
      />
      <Card
        container="section-two-container"
        content="section-two-content"
        links="section-two-links"
        heading="iPhone 15"
        description="New camera. New design. Newphoria"
      />
      <Card
        container="section-three-container"
        content="section-three-content"
        links="section-three-links"
        heading="MacBook Pro"
        description="Mind-blowing. Head-turning."
      />
      <div className="promos-flex-container">
        <PromoCard
          container="promo-one-container"
          content="promo-one-content"
          links="promo-one-links"
          heading="iMac"
          description="Packed with more juice."
        />
        <PromoCard
          container="promo-two-container"
          content="promo-two-content"
          links="promo-two-links"
          heading=""
          description="Smarter. Brighter. Mightier."
        />
        <PromoCard
          container="promo-three-container"
          content="promo-three-content"
          links="promo-three-links"
          heading="iPad"
          description="Lovable. Drawable. Magical"
        />
        <PromoCard
          container="promo-four-container"
          content="promo-four-content"
          links="promo-four-links"
          heading="AirPods Pro"
          description="Adaptive Audio. Now Playing."
        />
        <PromoCard
          container="promo-five-container"
          content="promo-five-content"
          links="promo-five-links"
          heading=""
          description="Get $200-$650 in credit when you trade in iPhone 11 or higher."
          linkContent="See what your device is worth"
        />
        <PromoCard
          container="promo-six-container"
          content="promo-six-content"
          links="promo-six-links"
          heading=""
          description="Get up to 3% Daily Cash back with every purchase."
        />
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
