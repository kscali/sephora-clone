import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search_bar";
import * as basket from "../../assets/images/images.png";

const MainNav = ({ user, logout, products, fetchProducts, cartItems }) => {
  let names = products.map(product => {
    return product.name;
  });

  const greeting = () => (
    <div className="greeting">
      <h6 className="logout-dd">
        Hi, {user.first_name} <span id="carat">&#x25bc;</span>
        <ul className="logout-menu">
          <li>
            <button className="btn-nav" onClick={() => logout()}>
              logout
            </button>
          </li>
        </ul>
      </h6>
    </div>
  );

  const signin = () => (
    <div className="register">
      <h6>Hi, Beautiful</h6>
      <div>
        <Link className="lnk" to="/login">
          Sign In
        </Link>
        <p>or</p>
        <Link className="lnk" to="/signup">
          Register
        </Link>
      </div>
    </div>
  );

  const cartItemsTotal = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].quantity;
    }
    return total;
  };

  return (
    <div className="mid-nav">
     
        <div className="app-header">
            <SearchBar
              names={names}
              products={products}
              fetchProducts={fetchProducts}
            />
          
          <div className="title-logo-header-col">
            <h2 className="title-logo-header">
              <Link className="title-logo" to="/">
                Pretty Little Things
              </Link>
            </h2>
          </div>
          { user ? greeting() : signin() }
          <div className="icon-container">
            <img
              id="heart"
              src={require("../../assets/images/icons8-heart-filled-50.png")}
              alt="black-heart"
            />
            <span className="basket">
              <Link to="/cart_items">
                <span className="notify-badge">{cartItemsTotal()}</span>
                <img
                  className="basket-icon"
                  src={basket}
                  alt="basket"
                  width="70"
                  height="70"
                />
              </Link>
            </span>
          </div>
        </div>
     
      <nav>
        <ul className="nav justify-content-center">
          <li className="dropdown">
            <Link to="/products">SHOP ALL</Link>
          </li>
          <li className="dropdown">
            CATEGORIES
            <div className="new2 dropdown-content">
              <div className="align">
                <div className="col">
                  <ul className="new-dd">
                    <li>
                      <Link to="/face">FACE</Link>
                    </li>
                    <li>
                      <Link to="/eye">EYE</Link>
                    </li>
                    <li>
                      <Link to="/lip">LIP</Link>
                    </li>
                    <li>
                      <Link to="/skin">SKIN</Link>
                    </li>
                    <li>
                      <Link to="/fragrance">FRAGRANCE</Link>
                    </li>
                    <li>
                      <Link to="/hair">HAIR</Link>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <img
                    id="new-img"
                    src="https://ks-plt.s3-us-west-1.amazonaws.com/wellness.jpg"
                    alt="wellness"
                  />
                </div>
                <div id="new-imgs" className="col">
                  <img
                    src="https://ks-plt.s3-us-west-1.amazonaws.com/fragrance.jpg"
                    alt="fragrance-gifts"
                  />
                  <img
                    id="second-img"
                    src="https://ks-plt.s3-us-west-1.amazonaws.com/play.jpg"
                    alt="play"
                  />
                </div>
              </div>
            </div>
          </li>

          <li className="dropdown">
            HOW TO VIDEOS
            <div className="new4 dropdown-content">
              <div className="col">
                <ul className="new-dd2">
                  <li>
                    <Link to="/foundation-tutorial">FOUNDATION TUTORIAL</Link>
                  </li>
                  <li>
                    <Link to="/eyeshadow-tutorial">EYESHADOW TUTORIAL</Link>
                  </li>
                  <li>
                    <Link to="/eyebrow-tutorial">EYEBROW TUTORIAL</Link>
                  </li>
                  <li>
                    <Link to="/lip-tutorial">LIP TUTORIAL</Link>
                  </li>
                  <li>
                    <Link to="/hair-tutorial">HAIR TUTORIAL</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="dropdown">
            COMMUNITY
            <div id="comm" className=" new dropdown-content">
              <div className="comm-div">
                <div className="comm-col">
                  <div className="divs  col">
                    <a
                      href="https://community.sephora.com/t5/custom/page/page-id/GroupsLandingPage?icid2=meganav_community_groups_041519_image"
                      target="_blank"
                    >
                      <img
                        src="https://ks-plt.s3-us-west-1.amazonaws.com/products/plt-images/groups.png"
                        alt="groups"
                      />
                    </a>
                  </div>
                  <div className="divs  col">
                    <a
                      href="https://community.sephora.com/?icid2=meganav_community_evergreen_conversations_041519_image"
                      target="_blank"
                    >
                      <img
                        src="https://ks-plt.s3-us-west-1.amazonaws.com/products/plt-images/community.png"
                        alt="convos"
                      />
                    </a>
                  </div>
                  <div className="divs col">
                    <a
                      href="https://www.sephora.com/community/gallery"
                      target="_blank"
                    >
                      <img
                        src="https://ks-plt.s3-us-west-1.amazonaws.com/products/plt-images/gallery.png"
                        alt="gallery"
                      />
                    </a>
                  </div>
                  <div className="divs col">
                    <a
                      href="https://community.sephora.com/t5/Exclusive-Events/bd-p/events-tips?icid2=meganav_community_evergreen_events_d_0415_image"
                      target="_blank"
                    >
                      <img
                        src="https://ks-plt.s3-us-west-1.amazonaws.com/products/plt-images/events.png"
                        alt="events"
                      />
                    </a>
                  </div>
                </div>
                <p>
                  Clicking on any of these links will take you to sephora.com
                </p>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
};

export default MainNav;
