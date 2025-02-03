import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

export async function productLoader() {
  const responce= await fetch("https://fakestoreapi.com/products")
  return responce.json()
}

function ProductList({searchTerm}) {
  const products = useLoaderData()

  const filterProducts = products.filter((productItem)=>
  productItem.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1 style={{textAlign:"center", margin:"18px"}}>PRODUCTS</h1>

      <Container >
      
        <Row>
          {filterProducts.length > 0 ? 
        (filterProducts.map((productItem) => (
          <Col key={productItem.id} md={4} lg={3} sm={6} style={{display:"flex", flexDirection:"column" , alignItems:"center", justifyContent:"center", padding:"10px"}}>
          <img
              src={productItem.image}
              
              alt={productItem.title}
              style={{ width: "150px", height: "150px", borderRadius: "10px" }}
            />
            <span style={{padding:"10px"}}>{productItem.title}</span>
            <Link to={`productItem/${productItem.id}`}>
            <button style={{padding:"6px 15px", borderRadius:"10px", border:"none", background:"grey", color:"#fff"}}>view details</button>
            </Link>
          </Col>
            ))) : 





        products.map((productItem) => (
          <Col key={productItem.id} md={4} lg={3} sm={6} style={{display:"flex", flexDirection:"column" , alignItems:"center", justifyContent:"center", padding:"10px"}}>
          <img
              src={productItem.image}
              
              alt={productItem.title}
              style={{ width: "150px", height: "150px", borderRadius: "10px" }}
            />
            <span style={{padding:"10px"}}>{productItem.title}</span>
            <Link to={`productItem/${productItem.id}`}>
            <button style={{padding:"6px 15px", borderRadius:"10px", border:"none", background:"grey", color:"#fff"}}>view details</button>
            </Link>
          </Col>
            ))}
        </Row>
      
      </Container>
    </div>
  );
}

export default ProductList;
