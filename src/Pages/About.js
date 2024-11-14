import Header from "../Component/Header";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";

const About =()=>{

    return(
    <>
    <Header/>
    
    
    <section className="about-us">
  <div className="about">
    {/*<img src="girl.png" class="pic">*/}
    <div className="text">
      <h2>About Us</h2>
      <h5>
        Front-end Developer &amp; <span>Designer</span>
      </h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus
        ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id
        eos adipisci iusto molestias asperiores explicabo cum vero atque amet
        corporis! Soluta illum facere consequuntur magni. Ullam dolorem
        repudiandae cumque voluptate consequatur consectetur, eos provident
        necessitatibus reiciendis corrupti!
      </p>
      <div className="data">
        <Link to="#" className="hire">   Hire Me</Link>
      </div>
    </div>
  </div>
</section>
<Footer/>
    </>

    )
}
export default About;
