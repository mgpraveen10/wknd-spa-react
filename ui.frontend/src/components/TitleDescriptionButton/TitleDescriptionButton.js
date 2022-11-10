import React, { Component } from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
require("./TitleDescriptionButton.css");

export const TitleDescriptionButtonEditconfig = {
    emptyLabel:"Title-Text-Button",
    isEmpty: function (props) {
        return !props || !props.title || props.title.trim().length < 1;
    },

};



export default class TitleDescriptionButton extends Component {
    get title() {
   return <h1>{this.props.title}</h1>;
    }


get description() {
   return <p>{this.props.description}</p>;
    }
  

    get buttonlinkname() {
        return(
           
        <div>
            
        <a href={this.props.buttonLink} target="blank">         
        {this.props.buttonName && (
 
    <button className="button_interior_class">{this.props.buttonName} </button>
    )}
                   
    </a></div>) ;

       }
      



      
       




    render() {
   if (TitleDescriptionButtonEditconfig.isEmpty(this.props)) {
    return null;
   }
   return (
   <div className='overal_titledescriptionbutton'>
    
       <div className='title_titledescriptionbutton'>
        {this.title}
        </div>
     <div className='description_titledescriptionbutton'>   {this.description}</div>
     {!this.props.badge && (
 
     <div className={this.props.buttonPosition}>{this.buttonlinkname}</div>)}
     

   </div>
   );
   }
}

MapTo("wknd-spa-react/components/customized-components/tdlinkname")(TitleDescriptionButton,TitleDescriptionButtonEditconfig);

