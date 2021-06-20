import React from 'react';

const Card = (props) => {
     const{name, fullImage, uniqueID} = props.item;
    return ( <div style={{marginRight:"5px",marginBottom:"5px",marginLeft:"5px"}}>
       <div className="card" style={{width: "18rem"}} key={uniqueID}>
  <img src={fullImage} className="card-img-top" alt="card img"/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">$1000</p>
    <a href="#" className="btn btn-primary" onClick={() => props.addProduct(props.item)}>Add to Cart</a>
  </div>
</div>
    </div>
       );
}
 
export default Card;