import { useState, useEffect } from "react";
import "./footer.styles.css";

const shopAndLearnLinks = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "Vision",
  "Airpods",
  "TV & Home",
  "AirTag",
  "Accessories",
  "Gift Cards",
];

const appleWalletLinks = ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"];

const accountLinks = [
  "Manage Your Apple ID",
  "Apple Store Account",
  "iCould.com",
];

const entertainmentLinks = [
  "Apple 1",
  "Apple TV+",
  "Apple Music",
  "Apple Arcade",
  "Apple Fitness+",
  "Apple News+",
  "Apple Podcasts",
  "Apple Books",
  "App Store",
];
const appleStoreLinks = [
  "Find a Store",
  "Genius Bar",
  "Today at Apple",
  "Apple Clamp",
  "Apple Store App",
  "Certified Refurbished",
  "Apple Trade In",
  "Financing",
  "Carrier Deals at Apple",
  "Order Status",
  "Shopping Help",
];

const forBusinessLinks = ["Apple and Business", "Shop for Business"];

const forEducationLinks = [
  "Apple and Education",
  "Shop for K-12",
  "Shop for College",
];

const forHealthCareLinks = [
  "Apple in HealthCare",
  "Health on Apple Watch",
  "Health Records on iPhone",
];

const forGovermentLinks = [
  "Shop for Government",
  "Shop for Veterans and Military",
];

const appleValues = [
  "Accessibility",
  "Education",
  "Environment",
  "Inclusion and Diversity",
  "Privacy",
  "Racial Equity and Justice",
  "Supplier Responsibility",
];
const aboutAppleLinks = [
  "Newsroom",
  "Apple Leadership",
  "Career Opportunities",
  "Investors",
  "Ethics & Compliance",
  "Events",
  "Contact Apple",
];

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState({
    accord1: false,
    accord2: false,
    accord3: false,
    accord4: false,
    accord5: false,
    accord6: false,
    accord7: false,
    accord8: false,
    accord9: false,
    accord10: false,
    accord11: false,
  });

  const openAccordionHandler = (index) => {
    setOpen({ ...open, [`accord${index}`]: !open[`accord${index}`] });
  };

  useEffect(() => {
    const getWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", getWidth);

    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, [windowWidth, open]);

  return (
    <footer>
      <div className="footer-container">
        <section className="apple-tradein-guidline">
          <p>
            1. Trade-in values will vary based on the condition, year, and
            configuration of your eligible trade-in device. Not all devices are
            eligible for credit. You must be at least 18 years old to be
            eligible to trade in for credit or for an Apple Gift Card. Trade-in
            value may be applied toward qualifying new device purchase, or added
            to an Apple Gift Card. Actual value awarded is based on receipt of a
            qualifying device matching the description provided when estimate
            was made. Sales tax may be assessed on full value of a new device
            purchase. In-store trade-in requires presentation of a valid photo
            ID (local law may require saving this information). Offer may not be
            available in all stores, and may vary between in-store and online
            trade-in. Some stores may have additional requirements. Apple or its
            trade-in partners reserve the right to refuse or limit quantity of
            any trade-in transaction for any reason. More details are available
            from Apple’s trade-in partner for trade-in and recycling of eligible
            devices. Restrictions and limitations may apply.
          </p>
          <p>
            Apple Vision Pro has not been authorized as required by the rules of
            the Federal Communications Commission. This device is not, and may
            not be, offered for sale or lease, or sold or leased, until
            authorization is obtained.
          </p>
          <p>
            Apple Vision Pro will be available early next year on{" "}
            <a href="https://www.apple.com/">apple.com</a> and at Apple retail
            stores in the U.S.
          </p>
          <p>
            To access and use all Apple Card features and products available
            only to Apple Card users, you must add Apple Card to Wallet on an
            iPhone or iPad that supports and has the latest version of iOS or
            iPadOS. Apple Card is subject to credit approval, available only for
            qualifying applicants in the United States, and issued by Goldman
            Sachs Bank USA, Salt Lake City Branch.
          </p>
          <p>
            If you reside in the U.S. territories, please call Goldman Sachs at
            877-255-5923 with questions about Apple Card.
          </p>
          <p>
            Learn more about how Apple Card applications are evaluated at{" "}
            <a href="https://support.apple.com/kb/HT209218">
              support.apple.com/kb/HT209218
            </a>
            .
          </p>
          <p>A subscription is required for Apple TV+.</p>
        </section>
        <section className="footer-nav-container">
          {windowWidth > 840 ? (
            <nav className="footer-nav-links">
              <div className="footer-nav-column">
                <div className="footer-nav-items">
                  <h4>Shop and Learn</h4>

                  <div>
                    {shopAndLearnLinks.map((link) => {
                      return <a href="/">{link}</a>;
                    })}
                  </div>
                </div>
                <div className="footer-nav-items">
                  <h4>Apple Wallet</h4>
                  <div>
                    {appleWalletLinks.map((link) => {
                      return <a href="/">{link}</a>;
                    })}
                  </div>
                </div>
              </div>
              <div className="footer-nav-column">
                <div className="footer-nav-items">
                  <h4>Account</h4>
                  <div>
                    {accountLinks.map((link) => {
                      return <a href="/">{link}</a>;
                    })}
                  </div>
                </div>
                <div className="footer-nav-items">
                  <h4>Entertainment</h4>
                  <div>
                    {entertainmentLinks.map((link) => {
                      return <a href="/">{link}</a>;
                    })}
                  </div>
                </div>
              </div>
              <div className="footer-nav-column">
                <div className="footer-nav-items">
                  <h4>Apple Store</h4>
                  <div>
                    {appleStoreLinks.map((link) => {
                      return <a href="/">{link}</a>;
                    })}
                  </div>
                </div>
              </div>
              <div className="footer-nav-column">
                <div className="footer-nav-items">
                  <h4>For Business</h4>
                  <div>
                    {forBusinessLinks.map((link) => {
                      return <a href="/">{link}</a>;
                    })}
                  </div>
                </div>
                <div className="footer-nav-items">
                  <h4>For Education</h4>
                  <div>
                    {forEducationLinks.map((link) => {
                      return <a href="/">{link}</a>;
                    })}
                  </div>
                </div>
                <div className="footer-nav-items">
                  <h4>For Healthcare</h4>
                  <div>
                    {forHealthCareLinks.map((link) => {
                      return <a href="/">{link}</a>;
                    })}
                  </div>
                </div>
                <div className="footer-nav-items">
                  <h4>For Government</h4>
                  <div>
                    {forGovermentLinks.map((link) => {
                      return <a href="/">{link}</a>;
                    })}
                  </div>
                </div>
              </div>
              <div className="footer-nav-column">
                <div className="footer-nav-items">
                  <h4>Apple Values</h4>
                  <div>
                    {appleValues.map((link) => {
                      return <a href="/">{link}</a>;
                    })}
                  </div>
                </div>
                <div className="footer-nav-items">
                  <h4>About Apple</h4>
                  <div>
                    {aboutAppleLinks.map((link) => {
                      return <a href="/">{link}</a>;
                    })}
                  </div>
                </div>
              </div>
            </nav>
          ) : (
            <nav className="footer-nav-links">
              <div className="footer-nav-column">
                <div className="footer-nav-items">
                  <button onClick={() => openAccordionHandler(1)}>
                    Shop and Learn
                  </button>
                  {open.accord1 && (
                    <div>
                      {shopAndLearnLinks.map((link) => {
                        return <a href="/">{link}</a>;
                      })}
                    </div>
                  )}
                </div>
                <div className="footer-nav-items">
                  <button onClick={() => openAccordionHandler(2)}>
                    Apple Wallet
                  </button>
                  {open.accord2 && (
                    <div>
                      {appleWalletLinks.map((link) => {
                        return <a href="/">{link}</a>;
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div className="footer-nav-column">
                <div className="footer-nav-items">
                  <button onClick={() => openAccordionHandler(3)}>
                    Account
                  </button>
                  {open.accord3 && (
                    <div>
                      {accountLinks.map((link) => {
                        return <a href="/">{link}</a>;
                      })}
                    </div>
                  )}
                </div>
                <div className="footer-nav-items">
                  <button onClick={() => openAccordionHandler(4)}>
                    Entertainment
                  </button>
                  {open.accord4 && (
                    <div>
                      {entertainmentLinks.map((link) => {
                        return <a href="/">{link}</a>;
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div className="footer-nav-column">
                <div className="footer-nav-items">
                  <button onClick={() => openAccordionHandler(5)}>
                    Apple Store
                  </button>
                  {open.accord5 && (
                    <div>
                      {appleStoreLinks.map((link) => {
                        return <a href="/">{link}</a>;
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div className="footer-nav-column">
                <div className="footer-nav-items">
                  <button onClick={() => openAccordionHandler(6)}>
                    For Business
                  </button>
                  {open.accord6 && (
                    <div>
                      {forBusinessLinks.map((link) => {
                        return <a href="/">{link}</a>;
                      })}
                    </div>
                  )}
                </div>
                <div className="footer-nav-items">
                  <button
                    onClick={() => {
                      openAccordionHandler(7);
                    }}
                  >
                    For Education
                  </button>
                  {open.accord7 && (
                    <div>
                      {forEducationLinks.map((link) => {
                        return <a href="/">{link}</a>;
                      })}
                    </div>
                  )}
                </div>
                <div className="footer-nav-items">
                  <button onClick={() => openAccordionHandler(8)}>
                    For Healthcare
                  </button>
                  {open.accord8 && (
                    <div>
                      {forHealthCareLinks.map((link) => {
                        return <a href="/">{link}</a>;
                      })}
                    </div>
                  )}
                </div>
                <div className="footer-nav-items">
                  <button onClick={() => openAccordionHandler(9)}>
                    For Government
                  </button>
                  {open.accord9 && (
                    <div>
                      {forGovermentLinks.map((link) => {
                        return <a href="/">{link}</a>;
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div className="footer-nav-column">
                <div className="footer-nav-items">
                  <button onClick={() => openAccordionHandler(10)}>
                    Apple Values
                  </button>
                  {open.accord10 && (
                    <div>
                      {appleValues.map((link) => {
                        return <a href="/">{link}</a>;
                      })}
                    </div>
                  )}
                </div>
                <div className="footer-nav-items">
                  <button onClick={() => openAccordionHandler(11)}>
                    About Apple
                  </button>
                  {open.accord11 && (
                    <div>
                      {aboutAppleLinks.map((link) => {
                        return <a href="/">{link}</a>;
                      })}
                    </div>
                  )}
                </div>
              </div>
            </nav>
          )}
          <p className="waysToShop">
            More ways to shop: <a href="/">Find an Apple Store</a> or{" "}
            <a href="/">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </p>
        </section>
        <section className="copyright">
          <div className="select-country">
            <p>United States</p>
          </div>
          <div className="copyright-container">
            <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
            <div className="legal-links">
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Use</a>
              <a href="/">Sales and Refunds</a>
              <a href="/">Legal</a>
              <a href="/">Site Map</a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
