
import { MapTo } from "@adobe/aem-react-editable-components";
import React, { Component } from "react";
require("./imagetitledescription.css");

export const ImagetitledescriptionEditconfig = {
    emptyLabel: "imagetitledescription",
         isEmpty: function (props) {
         return !props || !props.title || props.title.trim().length < 1;
     },
};

export default class imagetitledescription extends Component {
     get title() {
    return <h1>{this.props.title}</h1>;
     }

 get imagelink() {
     return <img src={this.props.imagelink} width="100%" />;
    }

 get description() {
    return <p style={{textAlign:"justify" , lineHeight:1.3}} >{this.props.description}</p>;
     }

     render() {
    if (ImagetitledescriptionEditconfig.isEmpty(this.props)) {
    return null;}
    return (
    <div className="overall-imagetitledesc">
        <div className={this.props.position=='leftside'?'rightside':'leftside'} > 
            {this.title}
            
            {this.description}
        </div>
        
        <div className={this.props.position}>
            
            {this.imagelink}
        </div>
    </div>
    );
    }
}

MapTo("wknd-spa-react/components/customized-components/imagetitledescription")(imagetitledescription, ImagetitledescriptionEditconfig);













