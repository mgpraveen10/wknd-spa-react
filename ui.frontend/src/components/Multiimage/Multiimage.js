import React, { Component } from "react";

import { MapTo } from "@adobe/aem-react-editable-components";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
require("./Multiimage.scss");

const MultiimageEditConfig = {
  emptyLabel: "Multiimage",

  isEmpty: function (props) {
    return !props;
  },
};

export default class Multiimage extends Component {
  render() {
    if (MultiimageEditConfig.isEmpty(this.props)) {
      return null;
    }
    return (
      <div className="container text-decoration-non">
        <h3 style={{textAlign:"center"}}>{this.props.heading}</h3>
        <div className="row">
          {this.props.items1.map((item) => {
            return (
              <div className="col-6">
                <Link
                  className="text-decoration-none text-dark"
                  to={item.linkUrl + ".html"}
                >
                  <img className="w-100" src={item.imgurl} alt={item.imgUrl} />
                  <p>{item.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
        <Link
          className="text-decoration-none"
          to={this.props.subtitlelink + ".html"}
        >
          <p className="text-center">{this.props.subtitle}</p>
        </Link>
      </div>
    );
  }
}

MapTo("wknd-spa-react/components/customized-components/multicardlink")(Multiimage, MultiimageEditConfig);
