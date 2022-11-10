import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';
import Header1 from './components/Header1/Header1';
// import Title2 from './components/static component/title2';





// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div>
       
        {this.childComponents}
        {this.childPages}
        <Header1/>
        {/* <Title2/> */}
        
      
      
      </div>
    );
  }
}

export default withModel(App);
