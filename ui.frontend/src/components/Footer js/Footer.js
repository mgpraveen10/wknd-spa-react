import React, { Component } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import { Link } from "react-router-dom";

require("./Footer.css");

const FooterEditConfig = {
  emptyLabel: "Footer",
  isEmpty: function (props) {
    return !props;
  },
};

export default class Footer extends Component {
  baseCss = "Footer";
  render() {
    if (FooterEditConfig.isEmpty(this.props)) {
      return null;
    }

    return (
      <div className="footercon">
        <div className="footerlogocol">
          <a href="#">
            <div className="footer-brand">
              WE.<strong>RETAIL</strong>
            </div>
          </a>
        </div>
        <br />
        <div className="footercolcon">
          <div className="footercol">
            <a href="#">Men</a>
            {/* <p className="footerbluemenu">
              <a href="#">Shirt</a>
              <br />
              <a href="#">Shoe</a>
            </p> */}
          </div>
          <div className="footercol">
            <a href="#">Women</a>
            <br />
            {/* <p className="footerbluemenu">
              <a href="#">Shirt</a>
              <br />
              <a href="#">Shoe</a>
            </p> */}
          </div>
          <div className="footercol">
            <a href="#">Kids</a>
            <br />
            {/* <p className="footerbluemenu">
              <a href="#">Shirt</a>
              <br />
              <a href="#">Belt</a>
            </p> */}
          </div>
          <div className="footercol">
            Follow Us
            <br />
            <p className="footerbluemenu">
              <a href="#">Facebook</a>
              <br />
              <a href="#">Instagram</a>
            </p>
          </div>
        </div>
        <div className="footercopyr">
          <p>
            © 2022, Inc. All rights reserved. |<a href="#">Terms of Use</a> |
            <a href="#">Privacy Policy</a> |<a href="#">Cookie Policy</a> |
            <a href="#">Social Responsibility</a> | <a href="#">Site Map</a>
          </p>
        </div>
        <div>
          <div >
          <a href="#spa-root" className="footer_backtotop">BACK TO TOP</a>
          </div>
        </div>
      </div>
    );
  }
}

MapTo("wknd-spa-react/components/footer")(Footer, FooterEditConfig);
