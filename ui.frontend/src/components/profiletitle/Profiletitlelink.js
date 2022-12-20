import {  MapTo } from "@adobe/aem-react-editable-components";
import React, { Component } from "react";


import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

require("./profiletitlelink.css");


export const ProfiletitlelinkEditConfig = {
    emptyLabel: "profile",
    isEmpty: function (props) {
      return !props ||!props.items1 || props.items1.length<1;
    },
  };
  export default class Profiletitlelink extends Component {
    render() {

        if (ProfiletitlelinkEditConfig .isEmpty(this.props)) {
            return null;
          }

          return (
            <div className="profile_outer">
             
            {this.props.items1.map((item) => {
                return (
                  <div className="profile_inner">
                    <Link
                      className="text-decoration-none text-dark"
                      to={item.linkUrl + ".html"}
                    >
                      <img className="profile_image"  src={item.imgUrl} alt={item.imgUrl} />
                      <p className="profile_title">{item.title}</p>
                    </Link>
                  </div>
                );
            })}
</div>
          )

    }}
    MapTo("wknd-spa-react/components/customized-components/profiletitle")(Profiletitlelink, ProfiletitlelinkEditConfig);