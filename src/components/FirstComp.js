import React from 'react';
function FirstComp(props){
    //return <h1>First Component</h1>
    return(<div className={props.className}>
      <h1>Welcome to FirstComp</h1>
    </div>);
}
export default FirstComp