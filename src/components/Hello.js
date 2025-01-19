import React from "react";
const Hello=()=>{
    // return(
    //     <div>
    //         <h1>asdfghjkl</h1>
    //     </div>
    // )
    //with out JSX
    return React.createElement(
        'div',{id:'asd', className:'dummy'},React.createElement('h1',null,'With out JSX')
    )    
}
export default Hello