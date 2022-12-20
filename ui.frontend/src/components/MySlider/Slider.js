import { MapTo } from "@adobe/aem-react-editable-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";
require("./Slider.scss");

export const SliderEditConfig = {
  emptyLabel: "My Slider",
  isEmpty: function (props) {
    return !props.sliderHeadline;
  },
};

class Slider extends Component {
  get sliderText() {
    return this.props.sliderText;
  }
  get sliderLink() {
    return this.props.sliderLink;
  }
  get sliderHeadline() {
    return this.props.sliderHeadline;
  }
  render() {
    return (
      <div className="slider-ui-container">
        <h1 className="container-headline">{this.sliderHeadline}</h1>
        <Link className="container-link" to={this.sliderLink}>
          {this.sliderText}
        </Link>
        <div class="scrolling-wrapper">
          {this.props.slider.map((slider) => {
            return (
              <div class="card">
                <Link className="slider-link" to={slider.itemLink}>
                  <div className="slider-container">
                    <img
                      src={slider.sliderImg}
                      className="slider-img"
                      style={{ width: "100%" }}
                      alt=""
                    />
                    <p className="slider-item-title">{slider.itemName}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
MapTo("wknd-spa-react/components/customized-components/myslider")(Slider, SliderEditConfig);
