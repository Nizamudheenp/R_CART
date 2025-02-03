import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';


function Cart() {
  const cartItems = useSelector((state) => state.cart.addedProducts)

  const dispatch = useDispatch()
  return (
    <>
    {
      cartItems.length === 0 ? (<p style={{display:"flex", alignItems:"center", justifyContent:"center", height:"90vh", fontSize:"30px"}}>cart is empty !!</p>)
      :
    
      <div style={{ display: "flex", flexDirection:"column" ,alignItems: "center", justifyContent: "center", margin: "20px", width: "100%" }}>
        {cartItems.map((product)=>(
          <Card key={product.id} style={{ width: '26rem' , margin:"10px"}} >
          <Card.Img variant="top" src={product.image} style={{ height: "250px", padding: "50px" }} />
          <Card.Body>
            <Card.Title style={{ fontWeight: "500" }}>{product.title}</Card.Title>
            <Card.Title style={{ fontWeight: "700" }}>$ {product.price}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text >
          </Card.Body>
        </Card>
        ))}
        
      </div>
}
    </>
  )
}

export default Cart