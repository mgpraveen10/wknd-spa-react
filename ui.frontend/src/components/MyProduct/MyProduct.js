import { MapTo } from "@adobe/aem-react-editable-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Timer from "../Timer/Timer";

export const MyProductEditConfig = {
  emptyLabel: "My Product",
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1;
  },
};

class MyProduct extends Component {
  state = { isOfferActive: true };
  get image() {
    return (
      <img
        className="card-image-top"
        style={{ height: "30%" }}
        src={this.props.src}
        alt={this.props.src}
      />
    );
  }

  get offerPeriod() {
    if (!this.props.dateTillOffer) {
      return null;
    }
    const validity = new Date(this.props.dateTillOffer);
    const currentDate = new Date();
    setTimeout(() => {
      this.setState({ isOfferActive: false });
    }, validity.getTime() - currentDate.getTime());
    // }, 60000);

    return (
      <span className="text-success p-2 d-flex ">
        <p>
          Offer Ends in :{" "}
          <Timer timeTillOffer={validity.getTime() - currentDate.getTime()} />
        </p>
      </span>
    );
  }
  get ifOfferActive() {
    const validity = new Date(this.props.dateTillOffer);
    const currentDate = new Date();
    if (validity.getTime() < currentDate.getTime()) {
      // this.setState({ isOfferActive: false });
      setTimeout(() => {
        this.setState({ isOfferActive: false });
      }, validity.getTime() - currentDate.getTime());
      return false;
    } else {
      if (!this.state.isOfferActive) {
        this.setState({ isOfferActive: true });
      }

      return true;
    }
  }

  get productName() {
    return (
      <p
        className="text-center"
        style={{ fontWeight: "bold", lineHeight: "normal", fontSize: "15px" }}
      >
        {this.props.productTitle} | INR - {this.props.productPrice}
      </p>
    );
  }
  get productDescription() {
    return (
      <small
        className="p-2 text-center"
        style={{ lineHeight: "normal", marginTop: "-10px" }}
      >
        {this.props.productDescription}
      </small>
    );
  }

  get productPrice() {
    return this.props.productPrice ? (
      <p style={{ fontWeight: "bold" }}>INR - {this.props.productPrice}</p>
    ) : null;
  }

  get offerName() {
    return <small className="text-danger ">{this.props.offerName}</small>;
  }

  get offerDetails() {
    return (
      <small
        className="bg-danger p-2 "
        style={{ borderRadius: "5px", color: "black" }}
      >
        {this.props.offerDetails}
      </small>
    );
  }
  get isInOfferPeriod() {
    return this.props.isInOfferPeriod === true ? true : false;
  }

  showProductDetails = () => {
    localStorage.setItem("product", JSON.stringify(this.props));
  };
  render() {
    if (MyProductEditConfig.isEmpty(this.props)) {
      return null;
    }

    return this.ifOfferActive ? (
      <Link
        to="/content/wknd-spa-react/us/en/home/product-details-page.html"
        onClick={this.showProductDetails}
        style={{ textDecoration: "none" }}
      >
        <h1>{this.state.isOfferActive}</h1>
        <div className="card " style={{ minHeight: "480px" }}>
          {this.image}
          <div className=" p-2 ">
            {this.productName}
            {/* <p>|</p>
            {this.productPrice} */}
          </div>
          {this.productDescription}
          {this.isInOfferPeriod && this.state.isOfferActive ? (
            <div>
              <div className="d-flex align-items-center justify-content-center ">
                {this.offerDetails}
                {this.offerName}
              </div>
              {this.offerPeriod}
            </div>
          ) : (
            ""
          )}
        </div>
      </Link>
    ) : (
      <Link
        to="/content/wknd-spa-react/us/en/home/product-details-page.html"
        onClick={this.showProductDetails}
        style={{ textDecoration: "none" }}
      >
        <h1>{this.state.isOfferActive}</h1>
        <div className="card " style={{ minHeight: "480px" }}>
          {this.image}
          <div className=" p-2 ">
            {this.productName}
            {/* <p>|</p>
            {this.productPrice} */}
          </div>
          {this.productDescription}
        </div>
      </Link>
    );
  }
}

export default MapTo("wknd-spa-react/components/customized-components/product")(
  MyProduct,
  MyProductEditConfig
);
