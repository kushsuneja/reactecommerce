import { Link } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer"

const Home=()=>{
  return(
<>
<Header/>

  <section className="banner">
  
    <div className="container">
    <img src="./images/ecommerce.png" alt="mainbanner" />
      <h2>Welcome to KushFlex Pro Fit Store!</h2>
      <p>Discover amazing deals on our wide range of products.</p>
      <Link to="#" className="btn">  Shop Now  </Link>
    </div>
  </section>
  <section className="products">
    <div className="container">
      <h2>Featured Products</h2>
      <div className="product">
        <img src="./images/download (1).jpeg" alt="Product 1" />
        <h3>Body Gainer</h3>
        <p>$50.00</p>
        <Link to="#" className="btn">   Add to Cart </Link>
      </div>
      <div className="product">
        <img src="./images/download (2).jpeg" alt="Product 2" />
        <h3>Product 2</h3>
        <p>$40.00</p>
        <Link to="#" className="btn">    Add to Cart  </Link>
      </div>
      <div className="product">
        <img src="./images/download (1).jpeg" alt="Product 2" />
        <h3>Product 2</h3>
        <p>$40.00</p>
        <Link to="#" className="btn">   Add to Cart  </Link>
      </div>
      <div className="product">
        <img src="./images/download (2).jpeg" alt="Product 2" />
        <h3>Product 2</h3>
        <p>$40.00</p>
        <Link to="#" className="btn"> Add to Cart  </Link>
      </div>
      <div className="product">
        <img src="./images/download (1).jpeg" alt="Product 2" />
        <h3>Product 2</h3>
        <p>$40.00</p>
        <Link to="#" className="btn">  Add to Cart</Link>
      </div>
      <div className="product">
        <img src="./images/download (2).jpeg" alt="Product 2" />
        <h3>Product 2</h3>
        <p>$40.00</p>
        <Link to="#" className="btn"> Add to Cart</Link>
      </div>
    </div>
  </section>
  <footer>
    <div className="container">
      <p>© 2024 My KushFex Pro Fit. All rights reserved.</p>
    </div>
 </footer>
 <Footer/>
</>
 )
}
export default Home;
