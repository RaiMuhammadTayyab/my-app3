import React from 'react';
function Lunch(props){
    return(
      <div>
        <h1> Today we are serving in lunch {props.menu1}</h1>
        <h1> or {props.menu2} </h1>
         <h2> eat what ever you like with our speciality of {props.discount} Discount</h2> 
      
      </div>
    );
  }
  export default Lunch;