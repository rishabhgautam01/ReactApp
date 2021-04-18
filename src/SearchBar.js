import React from 'react'
import './Searchbar.css'



export default props => {
    return (
        <div className="bar">
       <div style={{paddingTop : "50px",paddingLeft: "200px"}}>
    <form  action='getbyname' method='get' id="search">
      <input
      type="text"
      id="name" 
      name='name' 
      placeholder="Search"
     
      />
     </form>
     <div style={{position : "absolute",top : "50px"  ,paddingLeft:"250px"}}>
        <label for="fromdate">From: </label>
        <input type="date"  id="fromdate" name='fromdate' />
    </div>

    <div style={{position : "absolute",top : "50px"  ,paddingLeft:"500px"}} >
        <label for="todate" >To: </label>
        <input type="date"  id="todate" name='todate' />
    </div>
    </div>

     
        </div>

        
    )
}









