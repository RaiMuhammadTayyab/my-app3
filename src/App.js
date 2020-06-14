import React from 'react';
import './App.css';
import Lunch from'./Lunch.js';
import Fast from './Breakfast.js';
function App() {
  return (
    <div className='App'> 
     {/* <Lunch></Lunch> */}
     {/*<Fast></Fast>*/}
      <Lunch menu1= 'Italian-Buffet' menu2= 'Chinese-Buffet' discount= '20%'/>
<Fast menu3='Aloo bhujia' discount2='25%'/>
<b/> 
<Fast menu3='Halwa Puri and Hot Channas' discount2='10%'/>


</div>
  );
}
export default App;
