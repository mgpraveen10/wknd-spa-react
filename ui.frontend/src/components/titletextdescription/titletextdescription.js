
import { MapTo } from "@adobe/aem-react-editable-components";
import React, { Component } from "react";

export const titletextdescriptionEditconfig = {
    emptyLabel: "titletextdescription",
         isEmpty: function (props) {
         return !props || !props.title || props.title.trim().length < 1;
     },
};

export default class titletextdescription extends Component {
     get title() {
    return <h1 style={{textAlign:"center"}} >{this.props.title}</h1>;
     }

 get text() {
     return <h3>{this.props.text}</h3>;
    }

 get description() {
    return <p>{this.props.description}</p>;
     }

     render() {
    if (titletextdescriptionEditconfig.isEmpty(this.props)) {
    }
    return (
    <div>
        <div className="">
         {this.title}
         </div>
        {this.text}
        {this.description}
    </div>
    );
    }
}

MapTo("wknd-spa-react/components/customized-components/titletextdescription")(titletextdescription, titletextdescriptionEditconfig);

