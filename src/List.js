import React from 'react';


function Table () {
   

    const responseData= [{
      Sl_no:"1",
      meeting_name:"John",
      attending:"3",
      date:"3/05/2021",
      stime:"11am",
      etime:"1am",
      
    },
    {
      Sl_no:"2",
      meeting_name:"Jane",
      attending:"5",
      date:"20/05/2021",
      stime:"1pm",
      etime:"5pm",
    },
    {
      Sl_no:"3",
      meeting_name:"Harry",
      attending:"4",
      date:"22/05/2021",
      stime:"4pm",
      etime:"8pm",
    },
    {
      Sl_no:"4",
      meeting_name:"Amit",
      attending:"30",
      date:"22/05/2021",
      stime:"9pm",
      etime:"10pm",
    },
    {
      Sl_no:"5",
      meeting_name:"Rohan",
      attending:"1",
      date:"24/05/2021",
      stime:"12pm",
      etime:"1pm",
    },
  
  ]
    
    
      const data= responseData.map((row) => [
        row.Sl_no,
        row.meeting_name,
        row.attending,
        row.date,
        row.stime,
        row.etime,
        row.actions
      ]);
      
return(  
    
<div style={{position : 'absolute',width : "1431px", height :'455px', left : '700px', top : '500px'} }  >
     <table style={{fontSize:"1rem", display:"initial"}}>
          <thead style={{color:" #0b5369"}}>
             <tr>
                <th>SL No. </th>
                <th>Meeting Name </th>
                <th>No. of People attending</th>
                <th>Date</th>
                <th>Start time </th>
                <th>End time</th>
                <th>Actions</th>
                <th></th>
             </tr>
           </thead>
           <tbody>
             {
               responseData.map((row)=>{
                 if(row)
                 return(
                <tr style={{padding:"1rem"}}>
                  <td>{row.Sl_no}</td>
                  <td>{row.meeting_name}</td>
                  <td>{row.attending}</td>
                  <td>{row.date}</td>
                  <td>{row.stime}</td>
                  <td>{ row.etime}</td>
                  <td><button>Del</button></td>
                </tr>

                 )
               })
             }  
                
          </tbody>
       </table>
       
</div>

)}
export default Table;