import React, { useState } from "react";
import Table from 'react-bootstrap/Table';

export default function App() {

  const [ price, setPrice ] = useState(12500);

  // Triggered when the value gets updated while scrolling the slider:
  const handleInput = (e)=>{
    setPrice( e.target.value );
  }
  const makanan = [
    { id: 1,name: "BAKSO", price: 12000  },
    { id: 2,name: "MIE AYAM", price: 15000  },
    { id: 3,name: "AYAM BAKAR", price: 13000  }
  ];
  const result = makanan.reduce((total, currentValue) => total = total + currentValue.price,0);

console.log(result);  //total

  return (
    <div className="App">
      <div>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama Makanan</th>
          <th>Harga</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Bakso</td>
          <td>12000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Ayam Bakar</td>
          <td>15000</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Mie Ayam</td>
          <td>13000</td>
        </tr>
      </tbody>
    </Table>
      </div>
      <input type="range" onInput={ handleInput } />
      <h1>Price: { price }</h1>
      <div>
      { makanan.filter( mkn => { return mkn.price > parseInt(price, 10) }).map( mkn => {
        return <p key={mkn.id}>{ mkn.id } |{mkn.name}| { mkn.price }; </p>
      })}        
      </div>
      <p>Total : {result}</p>
      
    </div>
  );
}
