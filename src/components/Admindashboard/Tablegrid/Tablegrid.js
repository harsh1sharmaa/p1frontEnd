import React from "react";
import Tablerow from "./Tablerow";

const Tablegrid = ({orders ,handleStatus}) => {

 
  return (
    <div className="Table">
      <table className="table-auto">
        <thead>
          <tr>
            <th>Email</th>
            <th>user Id</th>
            <th>totelPrice</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr> */}
          {
              orders.map((order,idx)=>{
                 return <Tablerow order={order} handleStatus={handleStatus}/>
              })
          }
         
        </tbody>
      </table>
    </div>
  );
};

export default Tablegrid;
